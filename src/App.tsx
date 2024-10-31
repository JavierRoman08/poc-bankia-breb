import '@styles/globals.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cover from '@components/pages/cover/cover'
import Login from '@components/pages/login/login';
import HomePage from '@components/pages/home/home';
import BreB from '@components/pages/home/bre-b/bre-b';
import Transfer from '@components/pages/home/bre-b/transfer';
import SelectAccount from '@components/pages/home/bre-b/select-account';
import AccountDocument from '@components/pages/home/bre-b/account/document';
import AccountPhone from '@components/pages/home/bre-b/account/phone';
import AccountKey from '@components/pages/home/bre-b/account/key';
import AccountCode from '@components/pages/home/bre-b/account/code';
import AccountMail from '@components/pages/home/bre-b/account/mail';
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

const router = createBrowserRouter([
  {
    path: '/',
    element: <Cover />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/home',
    element: <HomePage />
  },
  {
    path: '/home/bre-b',
    element: <BreB />
  },
  {
    path: '/home/bre-b/my-keys',
    element: <Keys />
  },
  {
    path: '/home/bre-b/my-keys/select-account',
    element: <KeysSelectAccount />
  },
  {
    path: '/home/bre-b/my-keys/select-account/confirm',
    element: <ConfirmKey />
  },
  {
    path: '/home/bre-b/my-keys/select-account/confirm/finish',
    element: <KeyCreationComplete />
  },
  {
    path: '/home/bre-b/history',
    element: <History />
  },
  {
    path: '/home/bre-b/history/request',
    element: <ReturnConfirmRequest />
  },
  {
    path: '/home/bre-b/scan-qr',
    element: <QrCode />
  },
  {
    path: '/home/bre-b/transfer',
    element: <Transfer />
  },
  {
    path: '/home/bre-b/transfer/amount',
    element: <Amount />
  },
  {
    path: '/home/bre-b/transfer/from',
    element: <AccountFrom />
  },
  {
    path: '/home/bre-b/transfer/resume',
    element: <Resume />
  },
  {
    path: '/home/bre-b/transfer/verification',
    element: <AuthCode />
  },
  {
    path: '/home/bre-b/transfer/completed',
    element: <TransferCompleted />
  },
  {
    path: '/home/bre-b/transfer/select-account',
    element: <SelectAccount />
  },
  {
    path: '/home/bre-b/transfer/select-account/document',
    element: <AccountDocument />
  },
  {
    path: '/home/bre-b/transfer/select-account/phone',
    element: <AccountPhone />
  },
  {
    path: '/home/bre-b/transfer/select-account/key',
    element: <AccountKey />
  },
  {
    path: '/home/bre-b/transfer/select-account/code',
    element: <AccountCode />
  },
  {
    path: '/home/bre-b/transfer/select-account/email',
    element: <AccountMail />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
