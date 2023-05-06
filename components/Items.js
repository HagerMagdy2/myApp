import { StyleSheet, Text, View, Pressable, Image, ScrollView } from "react-native";
import React from "react";
//import { useDispatch, useSelector } from "react-redux";
// import {
//   addToCart,
//   decrementQuantity,
//   incrementQuantity,
// } from "../CartReducer";
// import { decrementQty, incrementQty } from "../ProductReducer";

 const Items = () => {
    const services = [
        {
          id: "0",
          image: "https://th.bing.com/th/id/OIP.erlkOpnU4Octt686S5tw0wHaLH?w=204&h=306&c=7&r=0&o=5&pid=1.7",
          name: "Iced",
         
        },
        {
          id: "11",
          image: "data:image/jpeg;base64,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",
          name: "Hot"
        },
        {
          id: "12",
          image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAC0AOADASIAAhEBAxEB/8QAGwAAAQUBAQAAAAAAAAAAAAAAAAECAwQGBQf/xABHEAACAQMBBAYFCgQEAwkAAAABAgMABBEhBRIxURMiQWFxkQYUgaGxFSMyQlJikqLB0TNDcoJTsuHwJGPCFjREc4Oz0/Hy/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECAwUEBv/EACwRAAIBAwIEBQQDAQAAAAAAAAABAgMEESFBEhMxUQUiYXGRMlKB8BTB0aH/2gAMAwEAAhEDEQA/APW6KKKAKKKKAKKQsFBJIAGpJwAPEmmCaNv4e9IOaDK/iOnvoCSimZkP1QPE59w/elw/a3kP3oB1FJjvPnRuryoBaTI50YHIUundQCZHP4UuRzFGB3e6jA7vdQBRSbq8hRujsz50AtFNw3Y3ng0hMg+qGH3Tg+R/egH0VF08WQrHcYnAEnVye4nQ+dS0AUUUUAUUUUAUUUUAUUUUAUUUUAVyztGe7uJrXZiI6wHcub2bJto5P8KILq7j62oA550pduXz7O2bcXKRGQ5SI4Zl3BIdzeJXXu051Ys4reC1tobdESFY13EjxugHraYqM64JxpkI7RMh7h3uZRqGmxuKfuRjqDyz31bFIKWpICiiigCikLAcSKTfTnnwoB1FM6Re/wAqTpV5GoygSUUzpV5GjpV7/KmUB9FM6VO/ypekTnTIHUUgZT2ilqQNZVdSrqGU6FWAII7wapPBd2/XsXDAam1uGJjYco3OWU+Y7qvGkPCgK9pewXavuho5ojuzwSgCWF+TAdnI8DVquRfhLee0v0X55ZI7d904MkTsFKt2EDj7K69QgFFFFSAooooAooooAooooCrfwxz2lxDLEJopF3JYj/MRjgiuHbybV2JuwvFJf7GUkQ3ETb17ZR/YnjbBdR2EHPjWjk+ia4l3JNC888d2y9HBLK6t/AjRAGHSIMknRsYHbVWtyyex0YdpbOuFVoLiKTe4KrYccTgo2HB0PEVI10gGeA5nNefbV27sQXNussV2kkziSC82SBKCSq7pa1uQBnOQd0g6Z7a58lu+1JVfZu27O9lLLmOLaNzsy9bXJD2l4XjPI4YVlUnJLym9OinrLRHpEm0YF/mL7GH6VWfa0Q0DZ8zWMlTbFqD63s7aUQXi3QmeL8cBb4VWN8R9bdPKTeiPlKBXBq313nEYY/6dSlYUpLOTattcdg+FRNteTsB86x/rtydAGbluENn8JNRttC5GQUmHijj9K8Urq7f1Nnth4fS2wbE7Um7Rofv007VfXRvxViztKQZyWHjkUz5Ub7fvrF16z3Z6F4fA23yo/I5/qxUg2jIQp5j7VYYbRkYEjeIGMkAkVcivJ2SPqSk9YaKxOh8K1p1KsnjLKTsYLY142nIP/wBU8bVYcfjmsmbi4AyY5FHNwVH5sVE20YUOJLm3XuM8Rb8Kkn3VupXC6NmLs6e+DYrtuEHrZ91Ob0i2ZAu/PcJEmcb0h3RnlWNhe4uTi2hu7g5/8Na3Dj8RUL76mufR/a95CDc2VvbQAh+k2pfi2UEfaW3DPj+4Vvb1r1yw+nc81W0to/U/38mqT0x9GC6x/KtqXY4VD0u8SdMABKuy7atd9La1HrF5IAUhUlSoP1nB6wHfu47xXmhuPRPZIKSbVmupCMNZ+i1t6lG5Gm7NtCZjcMOeJR4UsHpJtF0a22NZWuxrNj1/VfnbqTvmupBvE94GfvV34OWPMzkVYQz5E/yejLDK9zHNfzK8yASQ20Q+ZhG9gO/Ns6L4dpGavQ7SspZZYN/cmibBSUbpYZIBQnQjQ1htmbdMpvLOZ2N0uz2VbyRgWkJfCpIeOQCxU+I7K0OwzDclHhkDNbWrQTHUlGeXfVTnmBn21omYNYND0qdm839KsffwpOmX7D/h/wBaToc8WJo6BOdWKjhLETjeAPYGyvxqSq7QngDkcjUQMsJ6pyvah4ew0BdopkciSLvL4EHiDyNPoAooooCC6LLFlTht9QCeGprPXs9pKkySHLIx3wmSykDAYrgNjlgj3Yru7R3vUrkqcMgV1PIqwNYK42rumRZ1dWaSeUPBlSskhGGBBzgZORwOB7KSeDSEHLoczaHozLtJ3vbLaxSXL7jO29vA5BUyQkEHsOlZm12fPZ3dwJQrND82GjO8u8Trg1vILxA7eq3Fi4WDpGjkQwS3D4y+V+j0g7m63jpVO5sr6aQXMFhGrTj604Uuw7AuApbu3891eS5p8ym4rqdOzq8qouLoc622jti2iZ7baFzCqMqqglbdYnkhJGnbpXVi9L7zqx3htpgNGNzAjeZUCudHZTOLpr2R7UW677wiH59kGpZVOmOzOtRC42VHjotniU8N+9k3s9/RoAvvrkUqVam9JYR9HN21XrDL9P8ATWetbHnhFxLsrZUyEb29BEQ35aq+tehbYDbNaIkjPRT3MYHlgVw22rclOiRYIY8EBYIlGB3E5NcyRLeQszrvM3FmJyffXQc5bHhja02/NlezO5JtL0EMr4+XEUEjdhvZxHkHGVyc++mfKHoP2XfpKO4XbfqKyTxwhmA0wSONRlIvtVk5zParSh9z+TYHaPoNjWf0lfuN9KP8uKT5U9AR9Kx2zOf+ftC7OfH5ysfux/a99LhOY076jmT/AFFv4lD7n8muG2/QuMgwejUDMeBud+cnx6RjXXg2tdiN5LLZWz7NEKbhisYgzAjOm67H8teeLuZzkedW4ru6iwIriZB9yRhjyNU5k86/0JWlDHl1922afaXpHt7McY2jdI5zvruRQKo7N3owG865DNJddae5eRzrvSOWJz3saYm19qgANdNIo+rMqSA+xwau2k8V/IEubKIp/MuLVGhMQ7CwTq+zGaxlRlVlq2xxQt4aRS9v1HDazgWeTChusSCe/XhXb2Zs6S5cInV01J4AVWSztobqaa5uxDaiRjFEd17yZRw3olO6vtOe6unb7caAOljZRRKRhZLhjJJk/WKjC+AruRlGEUmfLTpVK024LqdeHZNhawC2kLSXUk3SI4AUqVAGTjXd7MZ19laHZ+zNsW0JMM1naPOIWlVrZpzlAVGgkQA4xnjwrM7Gaa5u4ZZnaSWWWMuzYyesBjTTFejVrF51PJWg6b4Wc02W15CRLtiREydLO0t4mI5FpukPkBQuypFO8Nq7XJznrTxEfhMWPdXSoq5gca7b0lswZbX1faMSDLwSL0F0QPsOnUJ/tFLsrbWz9tRy9DvxXMB3bm2mG7NC2cajtHf8K7FcG62UkO3dm7YtlEbNHdW+0NzAWZWQGNmA7cjHlyoDoda3lD/UYhX8Ofsq9VeVBJGfDSpIWLRRE8d0A+I0oCSiijTuoCKdOkguExkvFIo8SpxXlu00KyPp2mvVd4dmtedbet+jurmPgVdsd44isqqzE9lnLFTBkZQVJ3Sw18ceGaYm0NpQQ3VvHPKI7grvoCBE5ByGI5jsPvqxMp1qjINa5zqSWh9TG1pVEm0dKP0k2skIhulivERlKPN1Z0A5SAHXx7NO2q7XNjKS27PAWOd3o1kRc64BRs+6uc3bT+xfAfCpVVvqS7KEdYZRewjD5u9tm7pS8LeTL+tMMc2RiS0c/duof+phVSmnHdxqyn6FHbP7hZLW8LyFYkIBJJjmt2A1xrh6F2dtOT+HbSN/R0Z+DVVlQb76DBOeAqPdX7I8hTjXYsreWNGW3sr9CVkQRkcRLNAmD/c9M9XkH0rixX+q5Rj5R71Qbo5AewUoFRx+hZWz3ZYEUA+lfW2nZFFcyH/Io99PDbPT615Kc/UWOFSOeXLH3VVApwFVczRWy3bLYu1X+DZ268muGkuG8cEqn5ac93fzALJcy7g4RxkRRg89yIAVWAqVRVHORpG2prVrPuTRKBwFdGAcKpRCujCAo3jwFIaspXxGJrPRqLeu7XuYv7FBNbysh6KwkmWdxosYC5+8a1eg4MRXXhHCPia8+ObaJKKj3nHEBh3aGlEiE4zg8m0qxiPqvdH+EvaWJ8hViqbnpZiQeqMAeA40BOn0R4UsIxGntPvNNclInIGWxuoObN1VHnipVG6qjkAPKgIy7HgN0fe1bypN4eJ5nWo851zSqRnwoQTA8KyPpXZsWS5QHLKMnGmV0/atWDk1U2nbi5tJVxllBZfZxo1oTFtPKPJZQWBJGDkg+NUZF413bqDo5ZVIxkkj2VyZo8E1ya0OGR9pYVlVppvqc9gKB9Ed1PdSKi3sZrFPU6TxjUU0lJk8vhSEnv8AKtTL2GzgbwI7VFQ4qWTJA458DUevf5VBKzgAKAKNe+lGaFtewuKcBTde6nAmqMlPuSAVKgFRoM1YVca+2qZNFr0LEC5PCuhGhZokHaST7MAfGqtuNDyzgGu7sq1a4u4lA4GJc95beNeu2jxSycXxOtwU3HubnYtt6vZLkdaQ7xPaQNBXRJpFVUREGioqqPADFITg11D48TeIz3Gl31YYYAjvqFjkk9lRls6A/tQkleQjeRGbdI1zz5A8cVJAgI3vPx5VFFGzMDrjmeJqdnChooiN/XebsUn9agD/AOJIPsRE/wB0mMaeH691S1Bbyo6sgG68RCunLOoPganoChmlzjtqAyacTTS5NSQWllAIzTzMuo41RBzTw3OgMpt+x6KZpUXqMSy+B7KzMyAg+Glek39ul3bumMuASnfzFYC5gMUjxnmcZ+FeW4hxLKOv4ZccufC+jODMpquUPLNdG4hOuBp3Vz5Ae/HDwrlN4PsIpSeSIgj/AO6YSeYpSKaaJmvAwJPDI99RnPMe+lJNJgmrJo0jb1H0Qe33Uox3mkwRSqaNol2849USKRxwaerL2r286jpyjsqjZVU+5Y3dMjhUyqTujnTEUgBfafbVxFChdNTp7ajWWhk8QzIs2keo7vjWu2KFtHjYgmSaeGJRjrZk0AHvY8gvnw9nW/SssShiSrfRBLcOIrR2kb7OuRcX8Fw9qqQ2kEybkjwNIcSXVwqnIBwg0BwByBNdejDgikfE31xz6jexpMuM70oA7sk1E0yAkKGY8z+wpHk2VGAZtoWwDAMo6ePLA8N0A5PspBe2aj/hraebk7J0Mf4psN5Ka9BzB6pPL9IFVz/vSpSLa33TM4DH6K8Xb+lF191U3ub+XIMiQIc9W2GXwewzSD4IPGokVIyxUdZjl2Ylnc82dssfOpBde5lfRAYo/H51vEjQfHwp0Q3QOzuqKJC2C2g+NWCQoyeAoChtC59Rudm3ecRvcxWVxyaOc4UnwJJruVjfSyVmtdl2qaz3e07URqOPVkVf191bLn40IOKc0m9Vl4we48aiML8vaKEjA1OBqMjcJzxpjSgUBY3gKzXpDs5nRr23BJXWdR2ffH612DOBypjXAwQ2MHIIxxB0xQlNrVHnjHeHI1SmXkMkjWtHtXZrxme6tIWe3Ub8yKMmEE4z/TWbe4ibqnAbvOK5F1RcfNE+v8MvY1EoVOpSYZJ0qIg1aZATodajMbA8K5qqH1tKGGnsVippcGp9O0YxTgIe1jTjOhDh2K26aUKasMYhwOaZje4A042JtJEeKmiBLLgZ1pVjPE6VJ83EN5mCga5OKh1dkc6cNHKWhaC7rAZ4HJNSRHfkAXLahVAGSSdMDvrmesySuqQh232ABAJZyToFUa1ttlbCurGNbu8GLxSMW7Kd6BGHVduzJ93w6tpQf1SR8f4pfprl02aDYuz1sbfflx6zMo6Tt6NeIQH4/wCldXex26VyUnlGjAirKTEiuofKvV6llI7dCWjiiR8AFkRFbHLIGaGzUSb7HqjjV+K3GAXOe6hUqokjnABq1Hbquran3VZCoo0AFQSTKgJOmO08KkDmKqMk4FVJ7uGJZJp3WOGFS7M3Z2D2nsFc6/2pBagT3MvRQgHcXG9NMeUaD/ffWfgj2x6YXO5Er2mxopPnJeJOOxWOjOe7QZ8xDZ0dkpJ6R7fG1mVxs3ZPUtQ/B7ndwMY0yMlm7yK3VV7KytNn20FpaRCOCFd1FGveSx4kniTVigOLBcxyIsiOjxN9FlYFT4EVbEqc8Dv/AH4ViJNjbS2PI3qdxLGCc9HMeo45BgNw+0Cr9ntO/jO7cxFOZJwp8Ccr5GhHF3NQ6pIDkA94rmXMW5k4JGpBH60+C+gl1VlJHHdIBHjjSp95G48D2Np/pQnJxixwH4jOD41PHbmXcO4QGYA1bNrFlioAyclTw9lTjdiTkRw8ajJdFERx2skgkPVBIVeG8d3iRWK27su0neW4toFVWPWRDjdbmByNbO4ntbz5ueT1e5XIik/lv91j8P8AYPFu7W8tyTLGwjbhIo3om/uGlZVG8aHqt0lLMjzt4rmAncLkDTB1x5601bo5O+p05CthLYwStvHIOuoAdde4/vTPkTZ0i/PW8kja/OW0yJnxjYA++uRVis+eHwfV0LidNZo1PwzLCeA8WA8QR+lL0lv/AIkXnWgf0b2Sc7rX0Z5EK48gc1X/AOzmzM63V14NaXGPy615GqPqjoQ8Qufti/k4xlth/Mj9mv6U1ru3XgWY9m6P3rvj0b2VxDXTc/mJl/zuKcNhbHjP8C5c54EIF9pZ2NUTpdmzSV5cv6eFfP8AZmHvZW0jQL3nU+XCmLDcTnfYk9uW1A8K1L2Nog3YbNEwfpM28fYFAWovUpWYA4Gfog4A/tUfoK9lJ6+SGDm1pOazcTz6IfsBbewdbuUKZUYCEMBgZ4uc9vKvR7a4S76BAAJpI87h+luE5BPd2+3v1xttsWaIxT3RjtY8hkk2h1RnnFbfxXPLKgV3bK4gthMmzxJLLIc3N5dfxGzqTjgB3eeK61OTSwz5m6jGcswRoJ4YN7d3VJC4OnbUDW8WiquCeXZSWk7TI3WLsDhn4gnt1qfqpxyWPL4a6V6Fqc5rGjHRRxxAc+0nWpukxyA7+NU5JioYkEADJ3dTxxxbFc+W7u5M9HbsqDOWkkVV5ZLEYHhrVsGbkkdC72jb2ysWkQMAT1z790a+6szebcu52KWETPJ2TXC4iQc0i4+dWTDPeN0SIJGz9C3QquT2s7/OEe1RXZsPR+KLdkvNxyCGFug+ZBGoL/aP+9aDVmf2X6MS7TlW+2pLLMjHLFzgy/dQD6v+/DdwwwW8UcMEaxxRqFREAVVA5AU8AAADgNABwFLUE4CijzooSMliimQpKiuh4hhXFudiMu89m+h16J+HsJ0867tFAY8wvbyES23RueLIpQnHh1TV23kGN1W/tcZ9zYrQOkcg3XVWHJgDVR9nW7ZKFkPLRl8m/emSvCQruYAKgHwYCiSGGVSu+VPYVIyD4NpSm2u4hoqyL/yzg/hNRGVEwHSVe46nyNBquhXfZXSqUeVJF+rvIQyn+pGPwqkdl7egP/CXMQQ6brSvjHIhkIPlXU6a1J6xK97I658hSrNan6F4q9wudw+TMKo4pmsKsonHOz9puT6zs3Z8rdslvN6vIe/MeB+WmfJEjHPql7F3Jc2c4/NuH313wJHwUupW/plikHvBp4hvP8Wb2xQH/oqnLRsrma6afJnvke5x1XuF/wDNhiOPwTmg7Gu/8ZP7on08mrRdFd5/in+6CD9BT+guvtj2RQ/tVXQj2Lq9q7SMz8i3J4zRn/0McfGWkOw5cavIee4LaMebu591aNkvRndSQ47d2zXPhkGm4mAJklZMDXM9sgH4UqFRh2LfzKz3M8NisPoW8LNp/wB6vJnH4LaNB+apk2PtgDEV3a2a9vyfZFWx3zO3SfmrqPc2qglto2ox9vaDY9u4wPuqsdpbDXjdW0rdogS5uGz+ar8uKKc6tLXr+P8ASmno7YBukub+4mc6tl4kLH7xOW99Xo9l7HRQqwb4HDpDIy+WQtIu0rQ5MVreEAjU2wgU+BlI+FB2nJIPm4JD2APIp9yD9alRhEylUrVNG2X1RUVFQbicEVAqKPLX30Hd4lgW7hk+ZqrHJtCUYCxRg8cgE+zOT8KsxWgOGnd3OdRqq+QP61fiWxly3uQs4YlY0Ej+Bcg+zT301NlyzMHu3Zl4iNDgDxIrqruoAqRqoHAKMD3VICTxFWIwkQw26wKEiRUXkoA88VNiTnT6KAQZ7aWiigCiiigCiiigCkxS0UAlRXC7yEEAjkampCM1DRKeHk4rwJrgFT27jMvwqtLCcH5xv7lRx+YV3HiDcRVeS3z2edZuD2Z6o1FujPtanOptz/VbQ/ouaBCFwOjtD4JImfwOK672o5VA1oeyqcEu5tzIPqilvS43QlqBjHG5x/7lRMkzHeKWpPMvef8Ay1dNq1MNq9VcJvclTpLYoPBJIcstppoCfWGI9rOaRLOAfSjsiefq4P8AmNX/AFV+VKLV+VRy5dy3Np9iotvAoxuw8+pbwLr+Gp16vB2H9J3f8oFTC1epVtW5VZUnuyHWjsiBY0Y5KhjzbLH31YRcYAHlUyWraaVZS1qyppFXXZDESpBx31dXMmNB5ULbgcqnVAtapYPHOXEwUAADAp9JgcqWrGQUUUUAUUUUAUUUUAUUUUAUUUUAUUUUAYppUUUVBKGmNNeNMMScqKKguhhij5U0xR8qKKFg6GPlS9DHyoooB4hj00p4ij5UUVJRjwi8qXAFFFSUbFooooAooooAooooAooooAooooD/2Q==",
          name: "Tea",
         
        },
        {
          id: "13",
          image: "data:image/jpeg;base64,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",
          name: "Coffee",
        },
        {
            id: "14",
            image: "https://th.bing.com/th/id/OIP.eEEgUz95vp0o5d9kzvdWUgAAAA?w=221&h=183&c=7&r=0&o=5&pid=1.7",
            name: "Hot Choclate",
           
          },
       
      ];
    const servicess = [
        {
          id: "0",
          image: "https://i.pinimg.com/236x/6e/55/5c/6e555c660fa1e3694c7571848c6b10b2.jpg",
          name: "Tea",
          quantity: 0,
          price: 10,
        },
        {
          id: "11",
          image: "https://i.pinimg.com/236x/cc/1c/52/cc1c52cebabadbd9843d5cb6009a8e3e.jpg",
          name: "Boba Tea",
          quantity: 0,
          price: 10,
        },
        {
          id: "12",
          image: "https://i.pinimg.com/236x/39/35/d7/3935d7a96e33f58d5ff217963304ce52.jpg",
          name: "Iced Coffee",
          quantity: 0,
          price: 10,
        },
        {
          id: "13",
          image: "https://i.pinimg.com/236x/ec/6e/92/ec6e92cb2f691487c6e157061a03767c.jpg",
          name: "Espresso",
          quantity: 0,
          price: 10,
        },
        {
          id: "14",
          image: "https://i.pinimg.com/236x/e0/13/cd/e013cd01edf6ab62c76b72016dcb905a.jpg",
          name: "Latte",
          quantity: 0,
          price: 10,
        },
        {
          id: "15",
          image: "https://i.pinimg.com/236x/2f/15/bf/2f15bf620628090eedcece52dd95ad85.jpg",
          name: "Iced Cortado",
          quantity: 0,
          price: 10,
        },
        {
          id: "16",
          image: "https://i.pinimg.com/236x/b4/94/67/b494678e5b41483ad9249fd5c4f2c4e1.jpg",
          name: "Iced Americano",
          quantity: 0,
          price: 10,
        },
        {
            id: "17",
            image: "https://i.pinimg.com/236x/64/06/d6/6406d6ea581d7e87f22bff8f10a92944.jpg",
            name: "Iced Mocha",
            quantity: 0,
            price: 10,
          },
          {
            id: "18",
            image: "https://i.pinimg.com/236x/cd/b3/17/cdb31751c992a9b79d554493851804f4.jpg",
            name: "Iced Cappuccino",
            quantity: 0,
            price: 10,
          },
          {
            id: "19",
            image: "https://i.pinimg.com/236x/9d/ce/02/9dce02095228f480761ce2da8931b11b.jpg",
            name: "Iced Flat White",
            quantity: 0,
            price: 10,
          },
          {
            id: "20",
            image: "https://i.pinimg.com/236x/0a/8c/1f/0a8c1f36f4a663dae88b6c2436e87b3b.jpg",
            name: "Iced Latte",
            quantity: 0,
            price: 10,
          },
          {
            id: "21",
            image: "https://i.pinimg.com/236x/43/f0/45/43f0458fc14f5be0a2153301938d30f4.jpg",
            name: "Strawberries & Cream Frappe",
            quantity: 0,
            price: 10,
          },
      ];
//   const dispatch = useDispatch();
//   const cart = useSelector((state) => state.cart.cart);
//   const addItemToCart = () => {
//     dispatch(addToCart(item)); // cart
//     dispatch(incrementQty(item)); // product
//   };
  return (
    <View style={styles.containrt}>


        <View>
          <Image
            style={{ width: 580, height: 450}}
            source={require("../assets/co1.jpg")}
          />
        </View>
<ScrollView horizontal showsHorizontalScrollIndicator={false}>

{services.map((service,index) => (
                <Pressable style={{margin:10,backgroundColor:"white",padding:20,borderRadius:7}} key={index}>
                    <Image source={{uri:service.image}} style={{width:70,height:70}}/>

                    <Text style={{textAlign:"center",marginTop:10}}>{service.name}</Text>
                </Pressable>
            ))}



</ScrollView>



        <ScrollView showsVerticalScrollIndicator={false}>
        {servicess.map((item,index) => (
      <Pressable
        style={{
          backgroundColor: "#F8F8F8",
          borderRadius: 8,
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          margin: 14,
        }}
      >
       
        <View>
          <Image
            style={{ width: 70, height: 70 }}
            source={{ uri: item.image }}
          />
        </View>

        <View>
          <Text
            style={{
              width: 83,
              fontSize: 17,
              fontWeight: "500",
              marginBottom: 7,
            }}
          >
            {item.name}
          </Text>
          <Text style={{ width: 60, color: "gray", fontSize: 15 }}>
            ${item.price}
          </Text>
        </View>

          <Pressable  style={{ width: 80 }}>
            <Text
              style={{
                borderColor: "gray",
                borderRadius: 4,
                borderWidth: 0.8,
                marginVertical: 10,
                color: "#088F8F",
                textAlign: "center",
                padding: 5,
                fontSize: 17,
                fontWeight: "bold",
              }}
            >
              Add
            </Text>
          </Pressable>
        {/* )} */}
         
      </Pressable>
      ))}
      </ScrollView>
    </View>
  );
};

export default Items;

const styles = StyleSheet.create({
containrt:{
backgroundColor:"#F4F1EF"
},

});