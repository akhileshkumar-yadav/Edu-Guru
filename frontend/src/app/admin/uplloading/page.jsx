'use client'
import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';

const Uploading = () => {
    const uploadFile = (e) => {
        // file uploading every function use
        const file = e.target.files[0];
        const fd = new FormData();
        fd.append('file',file);
        // preset name
        fd.append('upload_preset','addguru')
        // cloud name
        fd.append('cloud_name','dgxzvc68u')
        // https://api.cloudinary.com/v1_1/cloudName/image/upload
        axios.post('https://api.cloudinary.com/v1_1/dgxzvc68u/image/upload',fd)
        .then((result) => {
            toast.success('file Uploaded Successfully');
            console.log(result.data);
            
        }).catch((err) => {
            console.log(err);
            
            toast.error('Error while uploading file');
            
        });

    }
  return (
    <div>
      <div  className='flex justify-center items-center h-[90vh]'>
        <label htmlFor='upload-file' className='block rounded-lg text-2xl border-2 border-dashed cursor-pointer w-1/3 text-blue-500  p-5 mt-5'>Click Here to Upload file</label>
        <input type="file" className="hidden" id='upload-file' onChange={uploadFile} />
        </div>  

    </div>
  )
}

export default Uploading