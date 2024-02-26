import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html>
      <div className='flex justify-center items-center'>
        <div className='w-12 h-12 border-4 border-white rounded-full animate-spin'>
          <div className="w-4 h-4 border-2 border-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-ping"></div>
        </div>
      </div>
    </Html>
  );
};

export default Loader;
