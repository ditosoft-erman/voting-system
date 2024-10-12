import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { error } from '../../assets/image/image';

const ErrorPage: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center text-black mt-10">
      <div
        className="text-9xl font-bold"
        style={{ fontFamily: 'Roboto, sans-serif' }}
      >
        404
      </div>
      <p className="mt-4 text-lg">Sorry, this page doesn't</p>
      <button
        onClick={() => navigate('/')}
        className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
      >
        BACK HOME
      </button>
      <div className="mt-10 relative">
        <img
          src={error}
          alt="error image"
          className="inline-block"
          height={350}
          width={350}
        />
      </div>
    </div>
  );
};

export default ErrorPage;
