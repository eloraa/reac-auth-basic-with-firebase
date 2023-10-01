import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "./firebase.config";
import { useState } from "react";

export const Login = () => {
    const [user, setUser] = useState(null)

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const auth = getAuth(app)

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(res => {
                console.log(res.user);
                setUser(res.user)
            })
            .catch(error => console.log(error))
    }
    const handleFacebookLogin = () => {
        signInWithPopup(auth, facebookProvider)
            .then(res => {
                console.log(res.user);
                setUser(res.user)
            })
            .catch(error => console.log(error))
    }
    const handleGithubLogin = () => {
        signInWithPopup(auth, new GithubAuthProvider())
            .then(res => {
                console.log(res.user);
                setUser(res.user)
            })
            .catch(error => console.log(error))
    }
  return (
    <div className='h-full border border-[#111] flex flex-col'>
        <div className="h-[40%] bg-cover bg-center bg-no-repeat border-[1rem] border-[#111] relative" style={{backgroundImage: 'url(/124943.png)'}}>
            {user && 
            <div className="absolute -bottom-[1.5rem] translate-y-2/4 text-center w-full flex justify-between">
                <div>
                    <div className="w-20 h-20 border-white border-4 rounded-full bg-black overflow-hidden"><img className="w-full h-full" src={user.photoURL} alt="" /></div>
                    <h4 className="text-sm font-bold -indent-[.5ch]">@{user.displayName && user.displayName.split(' ')[0].toLowerCase()}</h4>
                </div>
                <div className="mt-auto">
                    <button onClick={() => setUser(null)} className="text-xs rounded-lg font-bold px-6 py-2 border-gray-200 border-2">Signout</button>
                </div>
            </div>}
        </div>
        <div className='px-4 mt-24 flex flex-col h-[60%]'>
            {user ? 
            <div className="grid gap-4"> 
                <div>
                    <h2 className="text-neutral-500 text-xs">Display Name</h2>
                    <h1 className="font-semibold">{user.displayName}</h1>
                </div>
                <div>
                    <h2 className="text-neutral-500 text-xs">Email</h2>
                    <h1 className="font-semibold">{user.email}</h1>
                </div>
            </div>
            :
            <>
            <h1 className="mb-6 font-bold text-center">Login To Continue</h1>
            <button onClick={handleGoogleLogin} className="w-full bg-[#111] text-white font-semibold py-4 rounded-lg flex items-center justify-center gap-3 active:scale-[.99] transition-transform mb-5">
                <div className="w-5">
                    <svg className="w-full h-full" viewBox="0 0 321 336">
                        <path d="M161.073 47.9907C174.323 47.6205 184.765 36.5795 184.394 23.3299C184.023 10.08 172.983 -0.36063 159.733 0.00928986L161.073 47.9907ZM24.0507 168L48.0424 168.64C48.0536 168.214 48.0536 167.786 48.0424 167.36L24.0507 168ZM160.403 312L159.733 335.99C160.179 336.003 160.626 336.003 161.073 335.99L160.403 312ZM296.755 168L320.746 167.36C320.4 154.358 309.76 144 296.755 144V168ZM160.403 144C147.148 144 136.403 154.746 136.403 168C136.403 181.254 147.148 192 160.403 192V144ZM159.733 0.00928986C69.1006 2.54113 -2.35376 78.0035 0.0593648 168.64L48.0424 167.36C46.3342 103.202 96.9157 49.7827 161.073 47.9907L159.733 0.00928986ZM0.0593648 167.36C-2.35376 257.997 69.1006 333.459 159.733 335.99L161.073 288.01C96.9157 286.218 46.3342 232.797 48.0424 168.64L0.0593648 167.36ZM161.073 335.99C251.706 333.459 323.159 257.997 320.746 167.36L272.762 168.64C274.471 232.797 223.891 286.218 159.733 288.01L161.073 335.99ZM296.755 144H160.403V192H296.755V144Z" fill="currentColor"/>
                    </svg>
                </div>
                Coninue With Google
            </button>
            <button onClick={handleFacebookLogin} className="w-full bg-blue-700 text-white font-semibold py-4 rounded-lg flex items-center justify-center gap-3 active:scale-[.99] transition-transform">
                <div className="w-8">
                <svg className='w-full h-full' viewBox="0 -0.5 25 25" fill="none">
                    <path d="M11.75 19C11.75 19.4142 12.0858 19.75 12.5 19.75C12.9142 19.75 13.25 19.4142 13.25 19H11.75ZM13.25 11C13.25 10.5858 12.9142 10.25 12.5 10.25C12.0858 10.25 11.75 10.5858 11.75 11H13.25ZM15.5 5.75C15.9142 5.75 16.25 5.41421 16.25 5C16.25 4.58579 15.9142 4.25 15.5 4.25V5.75ZM12.5 8H11.75H12.5ZM11.75 11C11.75 11.4142 12.0858 11.75 12.5 11.75C12.9142 11.75 13.25 11.4142 13.25 11H11.75ZM12.5 10.25C12.0858 10.25 11.75 10.5858 11.75 11C11.75 11.4142 12.0858 11.75 12.5 11.75V10.25ZM14.5 11.75C14.9142 11.75 15.25 11.4142 15.25 11C15.25 10.5858 14.9142 10.25 14.5 10.25V11.75ZM12.5 11.75C12.9142 11.75 13.25 11.4142 13.25 11C13.25 10.5858 12.9142 10.25 12.5 10.25V11.75ZM10.5 10.25C10.0858 10.25 9.75 10.5858 9.75 11C9.75 11.4142 10.0858 11.75 10.5 11.75V10.25ZM13.25 19V11H11.75V19H13.25ZM15.5 4.25C13.4289 4.25 11.75 5.92893 11.75 8H13.25C13.25 6.75736 14.2574 5.75 15.5 5.75V4.25ZM11.75 8V11H13.25V8H11.75ZM12.5 11.75H14.5V10.25H12.5V11.75ZM12.5 10.25H10.5V11.75H12.5V10.25Z" fill="currentColor"/>
                    </svg>
                </div>
                Coninue With Facebook
            </button>
            
            <button onClick={handleGithubLogin} className="mt-5 w-full bg-[#111] text-white font-semibold py-4 rounded-lg flex items-center justify-center gap-3 active:scale-[.99] transition-transform mb-5">
                <div className="w-5">
                    <svg className='w-full h-full' viewBox="0 0 644 735">
                        <path d="M186.899 667.398C186.899 704.182 216.69 734.008 253.461 734.065V651.927H253.566V582.088L254.688 521.462C256.025 502.758 263.263 485.119 275.175 471.407C275.233 471.34 275.292 471.273 275.35 471.206L275.474 471.065C275.603 470.917 275.732 470.77 275.862 470.624C275.911 470.57 275.959 470.516 276.008 470.462C276.475 469.942 276.167 469.102 275.474 469.015C275.056 468.963 274.638 468.91 274.219 468.857L274.218 468.856C273.959 468.823 273.7 468.79 273.441 468.756C273.208 468.726 272.975 468.695 272.742 468.665L272.712 468.661C251.957 465.929 231.044 461.546 211.455 453.982C210.115 453.464 208.78 452.932 207.452 452.384C153.469 430.107 110.521 382.397 110.521 276.315C109.995 239.739 121.928 204.281 143.984 176.47C144.755 175.497 145.539 174.534 146.335 173.58C147.372 172.338 147.711 170.656 147.236 169.11C147.207 169.016 147.178 168.922 147.15 168.828C146.611 167.062 146.106 165.287 145.634 163.505C137.526 132.89 139.27 100.186 150.68 70.671C150.764 70.453 150.849 70.2353 150.935 70.0176C151.361 68.9313 152.255 68.101 153.404 67.896C160.568 66.6186 189.517 64.9096 244.937 103.18C246.662 104.371 248.413 105.601 250.189 106.871C251.472 107.788 253.103 108.069 254.619 107.637L254.763 107.596C257.738 106.75 260.721 105.948 263.71 105.188C316.391 91.807 371.285 91.807 423.965 105.188C426.801 105.908 429.628 106.667 432.451 107.465L432.635 107.517C434.418 108.022 436.335 107.692 437.845 106.616C439.498 105.436 441.128 104.291 442.738 103.18C498.028 64.9903 526.818 66.6116 534.015 67.888C535.185 68.0956 536.098 68.941 536.538 70.047C536.566 70.1181 536.594 70.1892 536.621 70.2603L536.624 70.2683C536.651 70.3367 536.677 70.4051 536.705 70.4736C548.308 100.002 550.151 132.803 542.038 163.505C541.555 165.335 541.035 167.158 540.481 168.973C539.981 170.604 540.341 172.379 541.431 173.69L541.535 173.813C542.265 174.691 542.985 175.576 543.691 176.47C565.748 204.281 577.681 239.739 577.155 276.315C577.155 382.473 534.308 429.947 480.37 451.774C478.83 452.397 477.28 452.999 475.723 453.582C455.653 461.084 434.203 465.242 412.957 467.701L412.952 467.701C412.643 467.737 412.334 467.772 412.026 467.807L412.019 467.808C411.752 467.839 411.485 467.869 411.218 467.898C410.748 467.948 410.538 468.512 410.855 468.862L410.922 468.937L411.088 469.118L411.155 469.192L411.218 469.262L411.301 469.354L411.392 469.456C419.498 478.538 425.79 489.296 429.875 501.075C433.12 510.438 434.913 520.279 435.203 530.215C435.22 530.808 435.232 531.402 435.239 531.996C435.268 534.632 435.191 537.273 435.008 539.912V651.927H435.168V734.065C471.913 733.978 501.675 704.164 501.675 667.398V541.928C502.151 533.042 501.908 524.139 500.952 515.314C524.51 506.295 547.99 493.299 569.131 474.341C618.34 430.217 643.734 364.265 643.821 276.768C644.336 234.465 633.052 192.862 611.31 157.131C616.854 119.877 612.648 81.472 598.767 46.1272L598.699 45.9533C598.647 45.8192 598.57 45.6222 598.476 45.3876C590.834 26.1924 572.905 7.08216 545.665 2.24724L545.656 2.24563C518.827 -2.51258 478.291 2.45234 422.873 36.5495C370.676 25.7973 316.994 25.7977 264.796 36.5507C209.134 2.3243 168.445 -2.50412 141.701 2.26446L141.694 2.26569C114.465 7.12381 96.4768 26.2797 88.8694 45.6791L88.8672 45.6849C88.7679 45.9382 88.6338 46.2811 88.4864 46.6631C74.873 81.8925 70.8043 120.095 76.3517 157.153C54.6184 192.881 43.3391 234.476 43.8548 276.772C43.9428 363.882 69.1824 429.586 117.822 473.87C139.592 493.69 163.891 507.165 188.208 516.468L188.191 516.708C188.107 517.879 188.054 519.053 188.033 520.228L186.91 580.854C186.903 581.266 186.899 581.677 186.899 582.088V585.868C182.121 588.076 177.022 589.51 171.79 590.112L171.78 590.113C165.287 590.862 158.713 590.316 152.432 588.506L152.423 588.504C146.141 586.696 140.266 583.656 135.138 579.554C130.016 575.457 125.741 570.375 122.566 564.598C122.46 564.405 122.352 564.213 122.242 564.022C113.502 548.841 101.43 535.857 86.9404 526.044L86.9339 526.039C72.443 516.231 55.9056 509.846 38.5698 507.39C20.3423 504.807 2.74647 520.759 0.164062 538.986L12.8143 556.237C15.3238 558.101 18.3213 560.299 21.5919 562.697C37.993 574.725 61.264 591.79 64.3355 597.059C71.7079 610.365 81.61 622.107 93.4923 631.613C105.471 641.195 119.227 648.321 133.975 652.567L133.98 652.569L133.984 652.57C148.731 656.817 164.167 658.098 179.406 656.342L179.416 656.341C181.925 656.052 184.421 655.682 186.899 655.231V667.398Z" fill="currentColor"/>
                    </svg>
                </div>
                Coninue With Github
            </button>
            </>
            }
            <h4 className="mt-auto pb-8 text-black font-semibold flex justify-center items-center gap-1 leading-[.5]">
                Created with 
                <div className="w-4">
                    <svg className="w-full h-full" viewBox="0 0 773 671">
                        <path d="M711.531 149.672V75.1406H642.859V0.6875H485.828V75.1406H417.156V149.672H355.828V75.1406H287.078V0.6875H130.125V75.1406H61.4531V149.672H0.046875V298.578H61.4531V373.109H120.281V447.562H179.188V522.016H247.859V596.547H326.375V671H446.609V596.547H525.047V522.016H593.797V447.562H652.703V373.109H711.531V298.578H772.859V149.672H711.531Z" fill="#E02D2D"/>
                    </svg>
                </div>
            </h4>
        </div>
    </div>
  )
}
