import { AppDataSource } from '../data-source'
import { NextFunction, Request, Response } from "express"
import axios from "axios";

class KakaoOauth {
    KAKAO_REST_API_KEY: string;
    KAKAO_REDIRECT_URI: string;
    _authCode: string;
    _accessToken: string;

    constructor(authCode: string) {
        this.KAKAO_REST_API_KEY = process.env.KAKAO_REST_API_KEY;
        this.KAKAO_REDIRECT_URI = process.env.KAKAO_REDIRECT_URI;
        this._authCode = authCode;
        this._accessToken = null;
    }

    async initialize() {
        // NOTE: 토큰 받기 참고 - https://developers.kakao.com/docs/latest/ko/kakaologin/rest-api#request-token
        const KAKAO_OAUTH_TOKEN_API_URL = process.env.KAKAO_OAUTH_TOKEN_API_URL;
        const tokenResult = await axios.post(
            KAKAO_OAUTH_TOKEN_API_URL,
            null,
            {
                params: {
                    grant_type: "authorization_code",
                    client_id: this.KAKAO_REST_API_KEY,
                    redirect_uri: this.KAKAO_REDIRECT_URI,
                    code: this._authCode,
                },
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
                }
            }
        ).then((result) => {
            return result.data;
        }).catch((err) => {
            throw new Error("[ERROR] AuthCode로 token 불러오기 실패" + err);
        })
        this.accessToken = tokenResult['access_token'];
    }

    async getUserInformation() {
        // NOTE: 유저 정보 불러오기 참고 - https://developers.kakao.com/docs/latest/ko/kakaologin/rest-api#req-user-info 
        const KAKAO_OAUTH_USER_INFO_API_URL = process.env.KAKAO_OAUTH_USER_INFO_API_URL;
        const userInfo = await axios.get(
            KAKAO_OAUTH_USER_INFO_API_URL,
            {
                headers: {
                    'Authorization': `Bearer ${this.accessToken}`,
                }
            }
        ).then((result) => {
            return result.data;
        }).catch((err) => {
            return null;
        });
        return userInfo;
    }

    async checkAgreementContent() {
        // NOTE: 동의 내역 확인하기 참고 - https://developers.kakao.com/docs/latest/ko/kakaologin/rest-api#check-consent
        const KAKAO_OAUTH_USER_SCOPE_API_URL = process.env.KAKAO_OAUTH_USER_SCOPE_API_URL;
        const agreeList = await axios.get(
            KAKAO_OAUTH_USER_SCOPE_API_URL,
            {
                headers: {
                    'Authorization': `Bearer ${this.accessToken}`,
                }
            }
        ).then((result) => {
            return result.data;
        }).catch((err) => {
            return null;
        });
        return agreeList;
    }

    get accessToken() { return this._accessToken; }
    set accessToken(arg: string) { this._accessToken = arg; }
}

export class OauthController {

    async getKakaoCode(request: Request, response: Response, next: NextFunction) {
        const authCode = request.query.code.toString();
    
        const kakaoOauth = new KakaoOauth(authCode);
        await kakaoOauth.initialize();
        const userInfo = await kakaoOauth.getUserInformation();

        return { success: true };
    }

}