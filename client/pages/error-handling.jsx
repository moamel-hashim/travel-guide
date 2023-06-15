import React from 'react';
import Header from '../component/header';
import DarkBackground from '../component/dark-background';
import images from '../lib/images';
export default function ErrorHandling(props) {
  const { isError, resetError } = props;
  return (
      <DarkBackground>
        <Header isError={isError}
                resetError={resetError}/>
        <div className='d-flex justify-content-center align-items-center vh-50'>

        <div className='mt-5 custom-border w-50 text-center'>
          <div className='d-flex gap-3 align-items-baseline'>

          <div className='w-20'>
            <img src={images[1]} className='img-fluid' alt="an image that shows some code with an error" />
          </div>
              <p className='text-light fs-4'>There was some type of mistake please <a className='w-50 text-center rick-roll' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'>click here to return back</a></p>
            </div>
          </div>
        </div>
      </DarkBackground>
  );
}
