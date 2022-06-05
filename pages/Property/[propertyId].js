import React from 'react'
import { useRouter } from 'next/router'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Image from 'next/image'
import { StarIcon, CheckIcon } from '@heroicons/react/solid'
import { FaStar } from "react-icons/fa";
import { useState } from "react"

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};

function PropertyDetails() {

  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)

  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }

  const [currentValue2, setCurrentValue2] = useState(0);
  const [hoverValue2, setHoverValue2] = useState(undefined);
  const stars2 = Array(5).fill(0)

  const handleClick2 = value => {
    setCurrentValue2(value)
  }

  const handleMouseOver2 = newHoverValue => {
    setHoverValue2(newHoverValue)
  };

  const handleMouseLeave2 = () => {
    setHoverValue2(undefined)
  }

  const [currentValue3, setCurrentValue3] = useState(0);
  const [hoverValue3, setHoverValue3] = useState(undefined);
  const stars3 = Array(5).fill(0)

  const handleClick3 = value => {
    setCurrentValue3(value)
  }

  const handleMouseOver3 = newHoverValue => {
    setHoverValue3(newHoverValue)
  };

  const handleMouseLeave3 = () => {
    setHoverValue3(undefined)
  }

  const [currentValue4, setCurrentValue4] = useState(0);
  const [hoverValue4, setHoverValue4] = useState(undefined);
  const stars4 = Array(5).fill(0)

  const handleClick4 = value => {
    setCurrentValue4(value)
  }

  const handleMouseOver4 = newHoverValue => {
    setHoverValue4(newHoverValue)
  };

  const handleMouseLeave4 = () => {
    setHoverValue4(undefined)
  }

  const [currentValue5, setCurrentValue5] = useState(0);
  const [hoverValue5, setHoverValue5] = useState(undefined);
  const stars5 = Array(5).fill(0)

  const handleClick5 = value => {
    setCurrentValue5(value)
  }

  const handleMouseOver5 = newHoverValue => {
    setHoverValue5(newHoverValue)
  };

  const handleMouseLeave5 = () => {
    setHoverValue5(undefined)
  }

  const [currentValue6, setCurrentValue6] = useState(0);
  const [hoverValue6, setHoverValue6] = useState(undefined);
  const stars6 = Array(5).fill(0)

  const handleClick6 = value => {
    setCurrentValue6(value)
  }

  const handleMouseOver6 = newHoverValue => {
    setHoverValue5(newHoverValue)
  };

  const handleMouseLeave6 = () => {
    setHoverValue5(undefined)
  }
  const router = useRouter()
  const propertyId = router.query.propertyId
  return (
    <div>
      <Header />
      <div className="text-secondary font-[Poppins] p-10">

        <h1 className="text-2xl font-bold">Title of the place</h1>
        <h3 className="pt-2 text-xl font-semibold underline underline-offset-4">Hosted by host_name</h3>

        <div className="h-full pt-5 grid grid-cols-3 gap-4 ">
          <Image className=" rounded-l-lg" src="/House.jpg" alt="house pic" height="150" width="200" layout="responsive" />
          <Image className=" " src="/house2.jpg" alt="house pic" height="150" width="200" layout="responsive" />
          <Image className=" " src="/house1.jpg" alt="house pic" height="150" width="200" layout="responsive" />
          <Image className=" " src="/house2.jpg" alt="house pic" height="150" width="200" layout="responsive" />
          <Image className=" " src="/house1.jpg" alt="house pic" height="150" width="200" layout="responsive" />

        </div>
        
        <div className=" pt-5  w-full">
        
        <h3 className=" mt-5 font-semibold text-xl " >2 bedrooms, 2 bathrooms, 1 kitchen, 6 guests</h3>
        <div className=" p-5 mt-5 rounded-lg border-4 space-y-2 border-secondary w-fit">
          <h1 className=" font-bold text-xl border-b-4 border-secondary">2500 Rs. per Night</h1>
          <p className=" text-base">2500 x 5 days = 12500 Rs.  </p>
          <p className=" text-base">Cleaning Fee = 500 Rs. </p>
          <p className="text-base">Service Fee = 1000 Rs. </p>
          <h2 className="border-t-4 border-secondary font-semibold text-xl">Total = 14000 Rs. </h2>
        </div>
        </div>

        <div className="pt-8">
          <h1 className="w-full border-t-2 border-secondary pt-5 text-2xl font-semibold">What this place offers</h1>
          <ul className="pt-2 space-y-2 text-xl grid grid-cols-3">
            <li> Pool </li>
            <li> Fireplace </li>
            <li> Television </li>
            <li> Washing Machine </li>
            <li> Exercide Equipment </li>
            <li> Wifi </li>
          </ul>
        </div>

        <div className="w-full pt-8">
          <h1 className=" pt-5 border-t-2 border-secondary text-2xl font-semibold pb-3">Reviews</h1>
          <div className="pt-3 text-xl space-y-3 flex-row grid grid-cols-3">
            <label> Cleanliness
              <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={22}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          )
        })}
      </div>
            </label>
            <label> Check in
            <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={22}
              onClick={() => handleClick2(index + 1)}
              onMouseOver={() => handleMouseOver2(index + 1)}
              onMouseLeave={handleMouseLeave2}
              color={(hoverValue2 || currentValue2) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          )
        })}
      </div>
            </label>
            <label> Location
            <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={22}
              onClick={() => handleClick3(index + 1)}
              onMouseOver={() => handleMouseOver3(index + 1)}
              onMouseLeave={handleMouseLeave3}
              color={(hoverValue3 || currentValue3) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          )
        })}
      </div>
            </label>
            <label> Communication
            <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={22}
              onClick={() => handleClick4(index + 1)}
              onMouseOver={() => handleMouseOver4(index + 1)}
              onMouseLeave={handleMouseLeave4}
              color={(hoverValue4 || currentValue4) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          )
        })}
      </div>
            </label>
            <label> Accuracy
            <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={22}
              onClick={() => handleClick5(index + 1)}
              onMouseOver={() => handleMouseOver5(index + 1)}
              onMouseLeave={handleMouseLeave5}
              color={(hoverValue5 || currentValue5) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          )
        })}
      </div>
            </label>
            <label> Value
            <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={22}
              onClick={() => handleClick6(index + 1)}
              onMouseOver={() => handleMouseOver6(index + 1)}
              onMouseLeave={handleMouseLeave6}
              color={(hoverValue6 || currentValue6) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          )
        })}
      </div>
            </label>
          </div>
        </div>

        <div className="w-full pt-8">
          <h1 className=" border-t-2 border-secondary pt-5 text-2xl font-bold">Location</h1>
          <p>Idhr map ayega</p>
          <h2 className="pt-5 font-semibold text-xl" >Mallroad Murree, Pakistan</h2>
        </div>
        <br></br>
        <div className="border-t-2 border-secondary pt-8 w-full">
          <div className=" h-fit w-fit grid grid-cols-2">
            <Image src="/Person.png" alt="host image" height="100" width="100" layout="fixed" />
            <div className="font-semibold">
              <h1 className="text-xl">Host Name</h1>
              <p>Joined in January 2022</p>
            </div>
          </div>
          <div className="pt-5 grid grid-cols-2 w-fit">
            <StarIcon className="h-5 text-secondary" />
            <p>12 Reviews</p>
            <CheckIcon className="h-5 text-secondary" />
            <p>Host Verified</p>
          </div>
          <div className=" py-2">
            <p>Host ka lamba sa introduction</p>
            <h1 className="font-semibold">During your Stay : </h1>
            <p>Your host won’t be on the property but they’ll be available for anything you need during your stay.</p>
          </div>
        </div>
        <button className="text-md bg-[#b5838d] px-6 font-[Poppins] py-2 shadow-md inline-block rounded-full font-bold text-white">Contact Host</button>

      </div>
      <Footer />
    </div>
  )
}
const styles = {
  stars: {
    display: "flex",
    flexDirection: "row",
  }
};
export default PropertyDetails