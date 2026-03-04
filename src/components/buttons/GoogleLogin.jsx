'use client'
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const GoogleLogin = () => {
    const params=useSearchParams()
    const router=useRouter()
    const path=params.get('callback')
    const handleGoogleLogin=async()=>{
        const result=await signIn("google",{
           callbackUrl:path || '/'
        })
       if(!result?.ok){
        return null
       }
        if(result?.ok){
            alert("Login successful!");
            
        }
        else{
            alert("Login failed. Please try again.")
        }
        console.log({result});
    }   
    return (
        <div>
            <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 border py-3 rounded-lg hover:bg-primary transition"
        >
          <Image
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            width={20}
            height={20}
          />
          Continue with Google
        </button>
        </div>
    );
};

export default GoogleLogin;