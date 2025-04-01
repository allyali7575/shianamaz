import React from 'react';
import SurahFatiha from '../components/surahFatiha';
import SurahIkhlaas from '../components/SurahIkhlaas';
import Ruku from '../components/Ruku';
import SamiAllah from '../components/SamiAllah';
import Sajda from '../components/Sajda';
import Astaghfar from '../components/Astaghfar';
import Bihawlillah from '../components/Bihawlillah';
import Qunoot from '../components/Qunoot';
import Tashhadd from '../components/Tashhadd';
import Salaam from '../components/Salaam';

const Fajr = () => {
    return (
        <div className='prayer-content'>
            <h5 className='light-brown d-inline-block'>Niyyah/ Making Intention</h5><br />
            <p className='light-brown d-inline-block'>I offer this Fajr prayer of 2 rakaat seeking closeness to God</p>
            <p>Allaahu Akbar</p>

            <div>
                <h5 style={{ textDecoration: "underline" }}>1st Rakat</h5>
                <SurahFatiha />
                <SurahIkhlaas />

                <p>Allaahu Akbar</p>

                <Ruku />
                <SamiAllah />

                <p>Allaahu Akbar</p>

                <Sajda />
                <Astaghfar />
                <Sajda />

                <p><span className='light-brown d-inline-block me-2'>sit:</span><br />
                    Allaahu Akbar
                </p>

                <Bihawlillah />
            </div>

            <div>
                <h5 style={{ textDecoration: "underline" }}>2nd Rakat</h5>
                <SurahFatiha />
                <SurahIkhlaas />

                <p>Allaahu Akbar</p>
                <Qunoot />
                <p>Allaahu Akbar</p>

                <Ruku />
                <SamiAllah />
                <p>Allaahu Akbar</p>
                <Sajda />
                <Astaghfar />
                <Sajda />
                <Tashhadd />
                <Salaam />

                <h5 className='light-brown d-inline-block'>Tasbeeh of Fatima</h5>
                <p>34 x Allahu Akbar, 33 x Alhamdullilah, 33 x Subhan Allah</p>

                <h5 className='light-brown d-inline-block'>Dua</h5>
            </div>


        </div>
    );
};

export default Fajr;