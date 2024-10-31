import '@styles/globals.scss'
import Cover from '@components/pages/cover/cover'
import Login from '@components/pages/login/login';
import HomePage from '@components/pages/home/home';
import BreB from '@components/pages/home/bre-b/bre-b';
import Transfer from '@components/pages/home/bre-b/transfer';
import SelectAccount from '@components/pages/home/bre-b/select-account';
import AccountDocument from '@/components/pages/account/document';
import AccountPhone from '@/components/pages/account/phone';
import AccountKey from '@/components/pages/account/key';
import AccountCode from '@/components/pages/account/code';
import AccountMail from '@/components/pages/account/mail';
import Amount from '@components/pages/home/bre-b/transfer/amount';
import AccountFrom from '@components/pages/home/bre-b/transfer/account_from';
import Resume from '@components/pages/home/bre-b/transfer/resume';
import AuthCode from '@components/pages/home/bre-b/transfer/auth-code';
import TransferCompleted from '@components/pages/home/bre-b/transfer/transfer-complete';
import QrCode from '@components/pages/home/bre-b/qr/qr-code';
import History from '@components/pages/home/bre-b/history/history';
import Keys from '@components/pages/home/bre-b/keys/keys';
import KeysSelectAccount from './components/pages/home/bre-b/keys/select-account';
import ConfirmKey from '@/components/pages/home/bre-b/keys/confirm';
import ReturnConfirmRequest from '@components/pages/home/bre-b/history/request';
import KeyCreationComplete from './components/pages/home/bre-b/keys/key.creation';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { Suspense } from 'react';

function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Cover />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/home/bre-b" element={<BreB />} />
          
            {/* Rutas de Transferencia */}
            
            <Route path="/home/bre-b/transfer" element={<Transfer />} />
            <Route path="/home/bre-b/transfer/select-account" element={<SelectAccount />} />
            <Route path="/home/bre-b/transfer/select-account/document" element={<AccountDocument route={'/home/bre-b/transfer/amount'} />} />
            <Route path="/home/bre-b/transfer/select-account/phone" element={<AccountPhone route={'/home/bre-b/transfer/amount'} />} />
            <Route path="/home/bre-b/transfer/select-account/key" element={<AccountKey route={'/home/bre-b/transfer/amount'} />} />
            <Route path="/home/bre-b/transfer/select-account/code" element={<AccountCode route={'/home/bre-b/transfer/amount'} />} />
            <Route path="/home/bre-b/transfer/select-account/email" element={<AccountMail route={'/home/bre-b/transfer/amount'} />} />
            <Route path="/home/bre-b/transfer/amount" element={<Amount />} />
            <Route path="/home/bre-b/transfer/from" element={<AccountFrom />} />
            <Route path="/home/bre-b/transfer/resume" element={<Resume />} />
            <Route path="/home/bre-b/transfer/verification" element={<AuthCode />} />
            <Route path="/home/bre-b/transfer/completed" element={<TransferCompleted />} />
          
            <Route path="/home/bre-b/scan-qr" element={<QrCode />} />

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
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;