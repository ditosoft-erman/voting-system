import { Link } from 'react-router-dom';
import { logo } from '../../assets/image/image';
import { useNavigate } from 'react-router-dom';
import { FC } from 'react';

const LoginPage: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white flex flex-col p-7 md:flex-row items-center justify-center w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <img
              src={logo}
              alt="Supreme Secondary Learner Government logo"
              className="rounded-lg shadow-lg w-3/4 md:w-full"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-8">Login</h1>
            <form className="w-3/4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Enter your Username here"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Enter your Password here"
                />
                <p className="text-right text-gray-500 text-xs">
                  <Link to="/forgotPassword" className="hover:underline">
                    Forgot your password?
                  </Link>
                </p>
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={() => navigate('/dashboard')}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
