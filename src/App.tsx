import '@styles/globals.scss'
import Cover from '@components/pages/cover/cover'
import Login from '@components/pages/login/login';
import HomePage from '@components/pages/home/home';
import BreB from '@components/pages/home/bre-b/bre-b';
import Contacts from '@/components/pages/home/bre-b/contacts';
import SelectAccount from '@components/pages/home/bre-b/select-account';
import AccountDocument from '@/components/pages/account/document';
import AccountPhone from '@/components/pages/account/phone';
import AccountKey from '@/components/pages/account/key';
import AccountCode from '@/components/pages/account/code';
import AccountMail from '@/components/pages/account/mail';
import Amount from '@components/pages/home/bre-b/transfer/amount';
import AccountFrom from '@components/pages/home/bre-b/transfer/account_from';
import Resume from '@components/pages/home/bre-b/transfer/resume';
import AuthCode from '@/components/pages/auth/auth-code';
import TransferCompleted from '@components/pages/home/bre-b/transfer/transfer-complete';
import QrCode from '@components/pages/home/bre-b/qr/qr-code';
import History from '@components/pages/home/bre-b/history/history';
import Keys from '@components/pages/home/bre-b/keys/keys';
import KeysSelectAccount from './components/pages/home/bre-b/keys/select-account';
import ConfirmKey from '@/components/pages/home/bre-b/keys/confirm';
import ReturnConfirmRequest from '@components/pages/home/bre-b/history/request';
import KeyCreationComplete from './components/pages/home/bre-b/keys/key.creation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import MyQRs from './components/pages/home/bre-b/my-qrs/my-qrs';
import ShareQR from './components/pages/home/bre-b/my-qrs/share-qr';
import GeneratedQR from './components/pages/home/bre-b/my-qrs/generated-qr';
import ShareCompleted from './components/pages/home/bre-b/my-qrs/share-completed';
import Portability from './components/pages/home/bre-b/keys/portability';
import PortabilityRequest from './components/pages/home/bre-b/keys/portability-request';
import OnBoarding from './components/pages/onboarding/onboarding';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Cover />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<HomePage />} />

            {/* Ruta de OnBoarding */}
          
            <Route path="/home/onboarding" element={<OnBoarding />} />

          
            {/* Rutas de Transferencia */}
            
            <Route path="/home/bre-b" element={<BreB />} />
            <Route path="/home/bre-b/transfer" element={<Contacts />} />
            <Route path="/home/bre-b/transfer/select-account" element={<SelectAccount />} />
            <Route path="/home/bre-b/transfer/select-account/document" element={<AccountDocument route={'/home/bre-b/transfer/amount'} />} />
            <Route path="/home/bre-b/transfer/select-account/phone" element={<AccountPhone route={'/home/bre-b/transfer/amount'} />} />
            <Route path="/home/bre-b/transfer/select-account/key" element={<AccountKey route={'/home/bre-b/transfer/amount'} />} />
            <Route path="/home/bre-b/transfer/select-account/code" element={<AccountCode route={'/home/bre-b/transfer/amount'} />} />
            <Route path="/home/bre-b/transfer/select-account/email" element={<AccountMail route={'/home/bre-b/transfer/amount'} />} />
            <Route path="/home/bre-b/transfer/amount" element={<Amount />} />
            <Route path="/home/bre-b/transfer/from" element={<AccountFrom />} />
            <Route path="/home/bre-b/transfer/resume" element={<Resume />} />
            <Route path="/home/bre-b/transfer/verification" element={<AuthCode nextRoute='/home/bre-b/transfer/completed' />} />
            <Route path="/home/bre-b/transfer/completed" element={<TransferCompleted />} />
          
            {/* Rutas de QR */}
            <Route path="/home/bre-b/scan-qr" element={<QrCode />} />
            <Route path="/home/bre-b/my-qrs" element={<MyQRs />} />
            <Route path="/home/bre-b/my-qrs/share-qr" element={<ShareQR />} />
            <Route path="/home/bre-b/my-qrs/share-qr/code" element={<GeneratedQR />} />
            <Route path="/home/bre-b/my-qrs/completed" element={<ShareCompleted />} />

            {/* Rutas de Movimientos */}
              
            <Route path="/home/bre-b/history" element={<History />} />
            <Route path="/home/bre-b/history/request" element={<ReturnConfirmRequest />} />
          
            {/* Rutas de Llaves */}
            
            <Route path="/home/bre-b/my-keys" element={<Keys />} />
            <Route path="/home/bre-b/my-keys/create-key/document" element={<AccountDocument route={'/home/bre-b/my-keys/select-account'} />} />
            <Route path="/home/bre-b/my-keys/create-key/phone" element={<AccountPhone route={'/home/bre-b/my-keys/select-account'} />} />
            <Route path="/home/bre-b/my-keys/create-key/key" element={<AccountKey route={'/home/bre-b/my-keys/select-account'} />} />
            <Route path="/home/bre-b/my-keys/create-key/code" element={<AccountCode route={'/home/bre-b/my-keys/select-account'} />} />
            <Route path="/home/bre-b/my-keys/create-key/email" element={<AccountMail route={'/home/bre-b/my-keys/select-account'} />} />
            <Route path="/home/bre-b/my-keys/select-account" element={<KeysSelectAccount />} />
            <Route path="/home/bre-b/my-keys/select-account/confirm" element={<ConfirmKey />} />
            <Route path="/home/bre-b/my-keys/select-account/confirm/finish" element={<KeyCreationComplete />} />

            {/* Ruta de portabilidad */}

            <Route path="/home/bre-b/my-keys/portability" element={<KeysSelectAccount />} />
            <Route path="/home/bre-b/my-keys/portability/confirm" element={<Portability />} />
            <Route path="/home/bre-b/my-keys/portability/security-code" element={<AuthCode nextRoute='/home/bre-b/my-keys/portability/request'/>} />
            <Route path="/home/bre-b/my-keys/portability/request" element={<PortabilityRequest />} />

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;