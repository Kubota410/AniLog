const apiRoot = "https://api.annict.com";

/**
 * アクセストークン情報
 */
export const GetTokenInfo = `${apiRoot}/oauth/token/info`;

/**
 * アクセストークンを失効させる
 */
export const PostTokenRevoke = `${apiRoot}/oauth/revoke`;

/**
 * ユーザー情報
 */
export const GetUserInfo = `${apiRoot}/v1/me`;

/**
 * GrapQLエンドポイント
 */
export const GrapQLEndPoint = `${apiRoot}/graphql`;
