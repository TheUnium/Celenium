function navigate(hash){const mainContent=document.getElementById('main-content');switch(hash){case '#d_deb':case '#d_exe':const os=hash==='#d_deb'?'Linux':'Windows';const fileType=hash==='#d_deb'?'.deb':'.exe';mainContent.innerHTML=`
                <div class="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-black to-gray-900">
                    <img src="./assets/images/logo.png" alt="Celenium logo" class="w-32 mb-8 animate-pulse">
                    <h1 class="text-4xl font-bold text-white mb-1">Downloading for ${os}...</h1>
                    <p class="text-lg text-green-400 mb-8">Preparing your ${fileType} file</p>
                    <div class="flex items-center space-x-2 text-white">
                        <span class="text-lg">Download starting in ~5 seconds</span>
                    </div>
                </div>
            `;setTimeout(()=>{if(hash==='#d_deb'){window.location.href='https://builds.hamium.xyz/d?=celenium-linux-1.0.0.deb'}else{console.log('Windows download not yet implemented')}},5000);break;case '#lved':mainContent.innerHTML=`
                <div class="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-black to-gray-900">
                    <img src="./assets/images/logo.png" alt="Celenium logo" class="w-32 mb-8 animate-pulse">
                    <h1 class="text-4xl font-bold text-white mb-4">Coming soon!</h1>
                    <button onclick="navigate('')" class="px-4 py-2 bg-green-500 text-black font-semibold rounded-lg shadow hover:bg-green-600 transition">
                        Back to Home
                    </button>
                </div>
            `;break;default:mainContent.innerHTML=document.getElementById('default-content').innerHTML}}
function initSPA(){navigate(window.location.hash);window.addEventListener('hashchange',()=>{navigate(window.location.hash)});if(!window.location.hash){navigate('')}}
document.addEventListener('DOMContentLoaded',initSPA)