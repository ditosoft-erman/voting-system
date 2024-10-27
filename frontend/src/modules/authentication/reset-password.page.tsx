import { FC } from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../../assets/image/image';

const ResetPassword: FC = () => {
  return (
    <>
      <div className="bg-gray-100 flex items-center justify-center min-h-screen ">
        <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
          <div className="flex-shrink-0 mb-6 md:mb-0">
            <img
              alt="Supreme Secondary Learner Government logo"
              className="rounded-lg shadow-lg w-64 h-64 md:w-80 md:h-80"
              src={logo}
            />
          </div>
          <div className="w-full md:ml-8 mt-6  text-center md:text-left ">
            <h1 className="text-2xl text-center font-bold mb-8">
              Reset Password
            </h1>

            <form>
              <div className="mb-4">
                <div className="flex  border border-gray-300 rounded-lg overflow-hidden">
                  <input
                    className="w-full py-2 px-3 text-gray-700 focus:outline-none"
                    placeholder="@Email"
                    type="email"
                  />
                </div>
              </div>
              <div className="mb-4">
                <div className="flex  border border-gray-300 rounded-lg overflow-hidden">
                  <input
                    className="w-full py-2 px-3 text-gray-700 focus:outline-none"
                    placeholder="Password"
                    type="password"
                  />
                </div>
              </div>
              <div className="mb-4">
                <div className="flex  border border-gray-300 rounded-lg overflow-hidden">
                  <input
                    className="w-full py-2 px-3 text-gray-700 focus:outline-none"
                    placeholder="Confirm Password"
                    type="password"
                  />
                </div>
              </div>
              <button
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-white py-2 rounded-lg"
                type="submit"
              >
                Reset Password
              </button>
            </form>
            <div className="mt-4">
              <a className="">
                <p className="text-center">
                  Go back to{' '}
                  <Link to="/" className="text-blue-600 hover:text-blue-900">
                    Sign In
                  </Link>
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
