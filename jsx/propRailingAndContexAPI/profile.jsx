import React, { useContext } from 'react'
import { Data } from './form'

const Profile = () => {
  const { name, age } = useContext(Data)
  return (
    <>
      {
        /* <Data.Consumer>
        {(obj) => {
          console.log(obj)
          return <div>{`${obj.name} ${obj.age}`}</div>
        }}
      </Data.Consumer> */
      }
      {`${name} ${age}`}
    </>
  )
}

export default Profile
