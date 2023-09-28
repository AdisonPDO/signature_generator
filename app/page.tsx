"use client";
import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';


export default function Home() {
  const [values, setValues] = useState({
    photoUrl: '',
    prenom: 'Prénom',
    poste: 'Poste',
    team: 'Team',
    telephone: 'Telephone',
    mail: 'Mail',
    website: "Website",
    localisation: 'Localisation',
    logo: 'https://uploads-ssl.webflow.com/615aa84d1f1d9b5ca1befa91/615aaadafcc6d7191e744c70_50004125-0-LOGO-ELLOHA-CARRE.png',
    footer: 'https://team.elloha.com/avatars/footer.jpg'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  function copyToClipboard(html: string) {
    var container = document.createElement('div')
    container.innerHTML = html
    container.style.position = 'fixed'
    container.style.pointerEvents = 'none'
    container.style.opacity = '0'
    document.body.appendChild(container)
    window.getSelection()?.removeAllRanges()
    var range = document.createRange()
    range.selectNode(container)
    window.getSelection()?.addRange(range)
    document.execCommand('copy')
    document.body.removeChild(container);
    alert("Copied")
  }


  const htmlString = `
  <div style="width:600px;font-family: Arial;">
        <table style="width:600px;padding:8px;border-radius:100px 30px 30px 100px;margin-bottom:20px;box-shadow:1px 1px 5px rgba(0, 0, 0, 0.5)">
            <tr>

                <td style="vertical-align:middle;width:20%;padding:10px;">
                    <img height="130px" style="vertical-align:middle;border-radius:100%;margin-right:10px" src="${values.photoUrl}" alt="profil" />
                </td>

                <td style="vertical-align:middle;padding-right:40px">
                    <div style="font-weight:bold;font-size:16px">${values.prenom}</div>
                    <div style="font-size:12px;padding:2px">${values.poste}</div>
                    <div style="font-size:12px;padding:2px">${values.team} team</div>
                </td>

                <td style="vertical-align:middle;padding-right:15px;text-align:right">
                <div style="font-size:12px; padding:2px">
                  <span style="display: inline; margin-right: 3px;">${values.telephone}</span> 
                  <img style="display: inline-block; vertical-align: middle;" width="10px" src="https://team.elloha.com/avatars/icon-phone.svg"/>
                </div>   
                
                <div style="font-size:12px; padding:2px">
                  <span style="display: inline; margin-right: 3px;"><a href="${values.mail}" target="_blank">${values.mail}</a></span> 
                  <img style="display: inline-block; vertical-align: middle;" width="10px" src="https://team.elloha.com/avatars/icon-mail.svg"/>
                </div>  

                <div style="font-size:12px; padding:2px">
                  <span style="display: inline; margin-right: 3px;"><a href="${values.website} target="_blank">${values.website}</a></span> 
                  <img style="display: inline-block; vertical-align: middle;" width="10px" src="https://team.elloha.com/avatars/icon-site.svg"/>
                </div>  

                <div style="font-size:12px; padding:2px">
                  <span style="display: inline; margin-right: 3px;">${values.localisation}</span> 
                  <img style="display: inline-block; vertical-align: middle;" width="10px" src="https://team.elloha.com/avatars/icon-pin.svg"/>
                </div> 
                </td>

                <td>
                    <div style="padding:0px;height:75px;width:0px;border:0.5px solid #ccc"></div>
                </td>

                <td style="vertical-align:middle;padding-left:12px;text-align:start;width:15%">

                    <img style="max-width:65px" src="${values.logo}" alt="logo" />
                </td>
            </tr>
        </table>
        <img style="border-radius:25px;width:100%;box-shadow:1px 1px 5px rgba(0, 0, 0, 0.5)" class="footer-img" src="${values.footer}" alt="elloha" />
    </div>
  `;

  const htmlGoogleString = `
  <div style="width:600px;font-family: Arial;">
        <table style="width:600px;padding:3px;border: solid 1px #ccc;border-radius:100px 30px 30px 100px;margin-bottom:20px;box-shadow:1px 1px 5px rgba(0, 0, 0, 0.5)">
            <tr>

                <td style="vertical-align:middle;width:20%;padding:10px;">
                    <img height="110px" style="vertical-align:middle;border-radius:100%;margin-right:10px" src="${values.photoUrl}" alt="profil" />
                </td>

                <td style="vertical-align:middle;padding-right:40px">
                    <div style="font-weight:bold;font-size:16px">${values.prenom}</div>
                    <div style="font-size:12px;padding:2px">${values.poste}</div>
                    <div style="font-size:12px;padding:2px">${values.team} team</div>
                </td>

                <td style="vertical-align:middle;padding-right:15px;text-align:end">
                
                <div style="font-size:12px; padding:2px">
                  <span style="display: inline; margin-right: 3px;">${values.telephone}</span> 
                  <img style="display: inline-block; vertical-align: middle;" width="10px" src="https://team.elloha.com/avatars/icon-phone.svg"/>
                </div>   
                
                <div style="font-size:12px; padding:2px">
                  <span style="display: inline; margin-right: 3px;"><a href="${values.mail}" target="_blank">${values.mail}</a></span> 
                  <img style="display: inline-block; vertical-align: middle;" width="10px" src="https://team.elloha.com/avatars/icon-mail.svg"/>
                </div>  

                <div style="font-size:12px; padding:2px">
                  <span style="display: inline; margin-right: 3px;"><a href="${values.website}" target="_blank">${values.website}</a></span> 
                  <img style="display: inline-block; vertical-align: middle;" width="10px" src="https://team.elloha.com/avatars/icon-site.svg"/>
                </div>  

                <div style="font-size:12px; padding:2px">
                  <span style="display: inline; margin-right: 3px;">${values.localisation}</span> 
                  <img style="display: inline-block; vertical-align: middle;" width="10px" src="https://team.elloha.com/avatars/icon-pin.svg"/>
                </div> 
                
                </td>

                <td>
                    <div style="padding:0px;height:75px;width:0px;border:0.5px solid #ccc"></div>
                </td>

                <td style="vertical-align:middle;padding-left:12px;text-align:start;width:15%">

                    <img style="max-width:65px" src="${values.logo}" alt="logo" />
                </td>
            </tr>
        </table>
        <img style="border-radius:25px;width:100%;box-shadow:1px 1px 5px rgba(0, 0, 0, 0.5)" class="footer-img" src="${values.footer}" alt="elloha" />
    </div>
  `;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <h1 className="text-4xl font-bold mb-20">Signature generator</h1>
      <h3 className="text-2xl font-bold mb-1">#1 Rentrer ses informations</h3>
      <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-wrap'>
        <div className="w-1/2 px-3">
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Photo URL:
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="photoUrl" placeholder="https://..." type="url" name="photoUrl" value={values.photoUrl} onChange={handleInputChange} />
          </label>

          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Prénom (sans accent):
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="prenom" type="text" name="prenom" value={values.prenom} onChange={handleInputChange} />
          </label>

          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Url logo (https://...):
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="logo" type="text" name="logo" value={values.logo} onChange={handleInputChange} />
          </label>

          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Poste:
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="poste" type="text" name="poste" value={values.poste} onChange={handleInputChange} />
          </label>

          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Équipe:
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="team" type="text" name="team" value={values.team} onChange={handleInputChange} />
          </label>
        </div>
        <div className="w-1/2 px-3">
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Téléphone:
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="telephone" type="tel" name="telephone" value={values.telephone} onChange={handleInputChange} />
          </label>

          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Mail:
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="mail" type="email" name="mail" value={values.mail} onChange={handleInputChange} />
          </label>

          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Localisation:
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="localisation" type="text" name="localisation" value={values.localisation} onChange={handleInputChange} />
          </label>

          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Website (www...):
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="website" type="website" name="localisation" value={values.website} onChange={handleInputChange} />
          </label>

          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Bannière footer (https://...):
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="footer" type="text" name="footer" value={values.footer} onChange={handleInputChange} />
          </label>
        </div>
      </form>
      <h3 className="text-2xl font-bold mb-10 mt-10">#2 Copier le code adapté</h3>
      <h4 className="text-xl font-bold mb-10">Apple mail</h4>
      <div
        dangerouslySetInnerHTML={{ __html: htmlString }}
        className="preview"
      ></div>
      <button onClick={() => copyToClipboard(htmlString)} className=" bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-2 mb-10">
        Copier le code source Apple mail
      </button>
      <YouTube videoId="fyJgH3lkQFA" opts={{
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      }} />

      <h4 className="text-xl font-bold mb-10 mt-20">Gmail</h4>
      <div
        dangerouslySetInnerHTML={{ __html: htmlGoogleString }}
        className="preview"
      ></div>
      <button onClick={() => copyToClipboard(htmlGoogleString)} className=" bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-2 mb-10">
        Copier le code source Gmail
      </button>
      <YouTube videoId="bp249oLlY3E" opts={{
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      }} />
    </main>
  );
}