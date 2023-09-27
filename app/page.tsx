"use client";
import React, { useState } from 'react';


export default function Home() {
  const [values, setValues] = useState({
    photoUrl: '',
    prenom: 'Prénom',
    poste: 'Poste',
    team: 'Team',
    telephone: 'Telephone',
    mail: 'Mail',
    localisation: 'Localisation',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleCopyCode = () => {
    navigator.clipboard.writeText(htmlString)
      .then(() => {
        alert('Code copié dans le presse-papiers!');
      })
      .catch(err => {
        alert('Erreur lors de la copie dans le presse-papiers: ');
      });
  };

  const htmlString = `

    <div style="width:100%">
        <table
            style="width:100%;padding:8px;border:1px solid #ccc;border-radius:100px 30px 30px 100px;margin-bottom:20px;box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);">
            <tr>

                <td style="vertical-align:middle;width:10%">
                    <img style="vertical-align:middle;border-radius:100%;height:110px;margin-right:10px"
                        src="${values.photoUrl}" alt="profil" />
                </td>

                <td style="vertical-align:middle;padding-right:40px">
                    <div style="font-weight:bold;font-size:15">${values.prenom}</div>
                    <div style="font-size:12px;padding:2px">${values.poste}</div>
                    <div style="font-size:12px;padding:2px">${values.team}</div>
                </td>

                <td style="vertical-align:middle;padding-right:15px;text-align:end">
                    <div style="font-size:12px;padding:2px">${values.telephone}</div>
                    <div style="font-size:12px;padding:2px"><a href="${values.mail}"
                            style="color:#0057bb">${values.mail}</a></div>
                    <div style="font-size:12px;padding:2px"><a href="http://www.eloha.com"
                            target="_blank">www.elloha.com</a></div>
                    <div style="font-size:12px;padding:2px">${values.localisation}</div>
                </td>

                <td>
                    <div style="padding:0px; height:75px; width:0px; border:0.5px solid #ccc"></div>
                </td>

                <td style="vertical-align:middle;padding-left:12px;text-align:start;width:15%">

                    <img style="max-width:65px"
                        src="https://uploads-ssl.webflow.com/615aa84d1f1d9b5ca1befa91/615aaadafcc6d7191e744c70_50004125-0-LOGO-ELLOHA-CARRE.png"
                        alt="logo" />
                </td>
            </tr>
        </table>
        <img style="border-radius:25px;width:100%;box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);" class="footer-img"
            src="https://team.elloha.com/avatars/footer.jpg" alt="elloha" />
    </div>
  `;

  return (
<main className="flex min-h-screen flex-col items-center justify-between p-24">
<form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
  <label className='block text-gray-700 text-sm font-bold mb-2'>
    Photo URL:
    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="photoUrl" placeholder="https://..." type="url" name="photoUrl" value={values.photoUrl} onChange={handleInputChange} />
  </label>
  
  <label className='block text-gray-700 text-sm font-bold mb-2'>
    Prénom:
    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="prenom" type="text" name="prenom" value={values.prenom} onChange={handleInputChange} />
  </label>

  <label className='block text-gray-700 text-sm font-bold mb-2'>
    Poste:
    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="poste" type="text" name="poste" value={values.poste} onChange={handleInputChange} />
  </label>

  <label className='block text-gray-700 text-sm font-bold mb-2'>
    Équipe:
    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="team" type="text" name="team" value={values.team} onChange={handleInputChange} />
  </label>

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
</form>
<button onClick={handleCopyCode} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
  Copier le code source
</button>
      <div
        dangerouslySetInnerHTML={{ __html: htmlString }}
        className="preview"
      ></div>
    </main>
  );
}
