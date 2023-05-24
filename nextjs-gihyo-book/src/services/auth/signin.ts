import { ApiContext, User } from '@/types/data'
import { fetcher } from '@/utils'
export type SigninParams = {
  /**
   * ユーザー名
   * サンプルユーザーのユーザー名は "user"
   */
  usernames: string
  /**
   * パスワード
   * サンプルユーザーのパスワードは "password"
   */
  password: string
}

/**
 * 認証API（サインイン）
 * @param context APIコンテキスト
 * @param params パラメーl
 * @returns ログインユーザー
 */
const signin = async (
  context: ApiContext,
  params: SigninParams,
): Promise<User> => {
  return await fetcher(
    //複数の文字列を正規表現
    // Rootのurlの末尾が'/'の場合、空文字に置き換え
    `${context.apiRootUrl.replace(/\/$/g, '')}/auth/signin`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'appplication/json',
      },
      body: JSON.stringify(params),
    },
  )
}

export default signin
