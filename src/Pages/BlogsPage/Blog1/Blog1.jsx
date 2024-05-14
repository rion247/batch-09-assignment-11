import img1 from '../../../assets/token.jpg';

const Blog1 = () => {
    return (
        <div className="max-w-[350px] md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto mt-6 md:mt-8 lg:mt-10 xl:mt-12 font-poppins flex items-start border border-transparent rounded-xl flex-col mb-6 md:mb-8 lg:mb-10 xl:mb-12">

            <div className="w-full h-[200px] md:h-[300px] lg:h-[400px] xl:h-[500px]">
                <img className="object-cover rounded-xl w-full h-full" src={img1} alt="...Loading" />
            </div>

            <div className="max-w-80 md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto mt-4">

                <div className="mt-4 lg:mt-6">

                    <p className='text-sm lg:text-base'>
                        Access tokens and refresh tokens are components of OAuth 2.0, a protocol used for secure authorization between applications. They serve different purposes in the authentication process and are used to access protected resources on behalf of a user. Heres a breakdown of each:
                    </p>

                    <h6 className='text-lg lg:text-xl font-bold underline mt-2 lg:mt-4 p-4 lg:p-6'>Access Token:</h6>

                    <ul className='space-y-4 list-disc pl-6 md:pl-8 lg:pl-10 xl:pl-12 text-sm lg:text-base'>
                        <li>An access token is a credential that represents the authorization granted to the client application by the resource owner (usually the user).</li>
                        <li>It is used by the client application to access protected resources on the resource server (API) on behalf of the user.</li>
                        <li>Access tokens are short-lived and have a limited validity period, typically ranging from minutes to hours.</li>
                        <li>They are included in the authorization header of HTTP requests made by the client application to the resource server to authenticate and authorize the request.</li>
                        <li>Once an access token expires, the client application must obtain a new one by going through the authentication process again.</li>
                    </ul>

                    <h6 className='text-lg lg:text-xl font-bold underline mt-2 lg:mt-4 p-4 lg:p-6'>Refresh Token:</h6>

                    <ul className=' space-y-4 list-disc pl-6 md:pl-8 lg:pl-10 xl:pl-12 text-sm lg:text-base'>
                        <li>A refresh token is a long-lived credential used to obtain new access tokens from the authorization server.</li>
                        <li>It is issued alongside the access token during the initial authentication process.</li>
                        <li>Refresh tokens are typically stored securely on the client side (e.g., in browser cookies, local storage, or secure storage mechanisms in mobile apps).</li>
                        <li>When an access token expires, the client application can use the refresh token to request a new access token from the authorization server without requiring the user to re-enter their credentials.</li>
                        <li>Refresh tokens have a longer lifespan compared to access tokens, often ranging from days to months.</li>
                        <li>They help improve security by reducing the frequency of exposing access tokens, as they are only used to obtain new tokens and not to access resources directly.</li>
                    </ul>

                </div>

                <div>

                    <h6 className='text-lg lg:text-xl font-bold underline mt-2 lg:mt-4 p-4 lg:p-6'>As for where to store them on the client side:</h6>

                    <ul className=' space-y-4 list-disc pl-6 md:pl-8 lg:pl-10 xl:pl-12 text-sm lg:text-base'>
                        <li><b>Access Token:</b> Access tokens are typically stored temporarily in memory or in browser storage mechanisms such as session storage or local storage. Since they are short-lived and used frequently, storing them in memory is common practice. However, they should be handled securely to prevent unauthorized access.</li>
                        <li><b>Refresh Token:</b> Refresh tokens are more sensitive and should be stored securely on the client side. They are commonly stored in browser cookies with the HttpOnly and Secure flags set to prevent access by JavaScript and limit transmission to secure HTTPS connections. Alternatively, in native mobile applications, they can be stored in secure storage mechanisms provided by the platform (e.g., Keychain on iOS, SharedPreferences on Android).</li>
                    </ul>
                </div>

                <p className='text-sm lg:text-base' >
                    Overall, proper handling and storage of access tokens and refresh tokens are essential for ensuring the security and integrity of the authentication process in client-server interactions.
                </p>

                <div className="py-4 border-t border-dashed border-neutral-300 mt-8 mb-4 text-base">
                    <h6 className=" p-2 font-medium  uppercase dark:text-blue-400 rounded-full">Job Posted By: </h6>
                    <h6 className=" p-2 font-medium  uppercase dark:text-blue-400 rounded-full">Name: Milan Schneider</h6>
                    <h6 className=" p-2 font-medium   dark:text-blue-400 rounded-full">Email: Milan.Schneider@example.com</h6>
                </div>


            </div>

        </div>
    );
};

export default Blog1;