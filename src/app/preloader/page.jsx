"use client";
import React, { useEffect, useInsertionEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGlobalContext } from "@/context/GlobalContext";
import CircleProgressAssets from "@/components/PreLoader/CircleProgressAssets";
import Parent from "@/app/preloader/Parent";
import Text from "@/app/preloader/Text";
const page = () => {
    let images = [
        "https://avatars.mds.yandex.net/i?id=f63196398fdc75a1fbea76ec71c02626-5887538-images-thumbs&n=13",
        "https://avatars.mds.yandex.net/i?id=2c03ab69c6198bee234eef34b3ee3a0ac9d6c537-7545494-images-thumbs&n=13",
        "https://avatars.mds.yandex.net/i?id=0106ffc7882554b69b9ff9c29a49e69fedb367e7-4876801-images-thumbs&n=13",
        "https://avatars.mds.yandex.net/i?id=f6bcbc187e9fea3adc7fc1b96c0c97df38963919-9589172-images-thumbs&n=13",
        "https://avatars.mds.yandex.net/i?id=841dbf4456552d81839bcf901f0234c95638b263-5390142-images-thumbs&n=13",
        "https://avatars.mds.yandex.net/i?id=a7b45567188e091b7b98b5d44fd7385917f2880f-12661511-images-thumbs&n=13",
        "https://avatars.mds.yandex.net/i?id=e17ea0f4b302a611f2060f509216cce792067c64-4034676-images-thumbs&n=13",
        "https://avatars.mds.yandex.net/i?id=11c66f9b96f9c12ecd54b39a2f700bef429e1eaa-4366154-images-thumbs&n=13",
        "https://avatars.mds.yandex.net/i?id=2a00000190ee9998a2deb95ad0a42f912013-1576131-fast-images&n=13",
        "https://avatars.mds.yandex.net/i?id=b9d20a85233bd38d3a42943fdf201afe4185e4e3-12155387-images-thumbs&n=13",
        "https://avatars.mds.yandex.net/i?id=ad1f7079ceb822cd6bd45375e33579e4a8db3b68-10415001-images-thumbs&n=13",
        "https://avatars.mds.yandex.net/i?id=d201b0236c11066b3ca2883fe57e2f3fec779fe1-4492191-images-thumbs&n=13",
        "https://avatars.mds.yandex.net/i?id=e6bb7c5061e8577f8412721a5e6315c94fb464cc-12487149-images-thumbs&n=13",
        "https://avatars.mds.yandex.net/i?id=0885f90f23f14cb11e4d886137a5b3add209503b-4377598-images-thumbs&n=13",
        "https://avatars.mds.yandex.net/get-yabs_performance/7575512/hat7b3eba43747f3db87f1a189c3915a725/huge",
        "https://avatars.mds.yandex.net/i?id=31357e34963c65f1334944ae75f2fa60ec5f3f587de4fdc6-5858181-images-thumbs&n=13",
        "https://avatars.mds.yandex.net/i?id=4c1ff39feb1a2d342f220f47a08d5e5be7fc3cf6-4353628-images-thumbs&n=13",
      ];
  const [loading, setLoading] = useState(false);
  function completedLoading(){
    setLoading(!loading)
  }
  return (
    <>
      <Parent loading={loading}>
        {/* <CircleProgressAssets images={images} completed={completedLoading} /> */}
      </Parent>
    </>
  );
};

export default page;
