import React, { useEffect, useState } from "react";
import axios from "axios";
function UseFetchcustom(url) {
  const [apidata, setapidata] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(false);

  async function ombdapi() {
    try {
      let { data } = await axios.get(url);
      setapidata(data);
      setloading(false);
      seterror(false);
    } catch (error) {
      seterror(true);
      setloading(false);
    }
  }
  useEffect(() => {
    setloading(true);
    ombdapi();
  }, []);
  return { apidata, loading, error };
}

export { UseFetchcustom };
