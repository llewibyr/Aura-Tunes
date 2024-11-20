import React, { useState,useEffect } from 'react'
import axios from 'axios'
import SongService from '../service/SongServices';

const SongForm = () => {
 const [formData,setFormData] = useState({
    title: "",
    artist:"",
    album:"",
    description:"",
 });

 const [loading,setLoading] = useState(false);
 
const navigate = useNavigate    










  return (
  <h1>Song Form Page</h1>
  )
}

export default SongForm