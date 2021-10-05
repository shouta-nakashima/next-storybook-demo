import {FC} from 'react';
import Image from 'next/image'

const LgtmCard:FC = () => {
  return (
    <div className='w-40 h-full border rounded'>
      <Image className='m-auto p-4' alt="LGTM画像" src={'/lgtm.jpeg'} width={120} height={160}/>
      <p className='text-green-500 text-center border-t m-0 p-2'>LGTM</p>
    </div>
  );
};

export default LgtmCard;
