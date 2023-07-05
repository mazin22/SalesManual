import React, { useEffect, useState } from 'react';
import "./App.css"
function App() {

  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingCode, setIsEditingCode] = useState(false);
  const [isEditinGst, setIsEditingGst] = useState(false);
  const [isEditinQuatity, setIsEditingQuantity] = useState(false);
  const [isEditinRate, setIsEditingRate] = useState(false);
  const [Name, setName] = useState([]);
  const [Code, setCode] = useState([]);
  const [Gst, setGst] = useState([]);
  const [Quantity, setQuantity] = useState([]);
  const [Rate, setRate] = useState([]);
  const [Amount, setAmount] = useState([]);
  const [Total, setTotal] = useState(0);
  const [Narration, setNarration] = useState(0);
  const [Rounded, setRounded] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);


  let c = 0
  

  useEffect(() => {
    setFilteredItems(List.filter(list => list.toLowerCase().includes(inputValue.toLowerCase())));
  }, [inputValue]);

  const handleName = () => {
    setIsEditingName(true);
  };



  const handlename = () => {
    setIsEditingName(true);
  };
  const handlecode = () => {
    setIsEditingCode(true);
  };
  const handleGst = () => {
    setIsEditingGst(true);
  };
  const handleQuantity = () => {
    setIsEditingQuantity(true);
  };
  const handleRate = () => {
    setIsEditingRate(true);
  };

  const handleChangeName = (e,i) => {
    const val = [...Name]
    val[i] = e.target.value
    setName(val);


  };
  const handleChangeGst = (e,i) => {

    const val = [...Gst]
    val[i] = e.target.value
    setGst(val);



  };
  const handleChangeCode = (e,i) => {

    const val = [...Code]
    val[i] = e.target.value
    setCode(val);

  };
  const handleChangeQuantity = (e,i) => {

    const val = [...Quantity]
    val[i] = e.target.value
    setQuantity(val);
  };
  const handleChangeRate= (e,i) => {

    const val = [...Rate]
    val[i] = e.target.value
    setRate(val);
  };

  const handleBlurName = () => {
    setIsEditingName(false);
  };
  const handleBlurCode= () => {
    setIsEditingCode(false);
  };
  const handleBlurGst = () => {
    setIsEditingGst(false);
  };
  const handleBlurQuantity = () => {
    setIsEditingQuantity(false);
  };
  const handleBlurRate = () => {
    setIsEditingRate(false);
  };

  function addrow() {
    setName([...Name,"Name"])
    setCode([...Code,"c"])
    setGst([...Gst,"g"])
    setQuantity([...Quantity,0])
    setRate([...Rate,0])


  }

  function addAmount(i){
    const val = [...Amount]
    console.log(Rate[i])
    const tot = (parseInt(Rate[i])*parseInt(Quantity[i]))
    val[i] = tot
    setAmount(val)
    return tot

  }

  useEffect(()=>{
    for (let index = 0; index < Rate.length; index++) {
      addAmount(index)

    }
  },[Rate,Quantity])

  useEffect(()=>{
    for (let index = 0; index < Amount.length; index++) {

      c = c+Amount[index]
      setTotal(c)

    }
  },[Amount])
  useEffect(()=>{
    const res = Math.floor((Total+(((16/Total)*100)*2)).toFixed(2))
   setNarration(res)
   const value = (Narration%1).toFixed(2)
   setRounded(value)
  },[Total])
 
 

 const List = ["3 Nahni Trap", "5 layer 1000 liter water tank", "Ball Valve 25MM Box 10 UPVC", "Ball Valve 40MM Box 3 UPVC", "Bearing 30210", "Bearing 30305", "Bearing 30307", "Bearing 30308", "Bearing 30308 NBC", "Bearing 30309 NBC", "Bearing 30311", "Bearing 32016 DTech", "Bearing 32206", "Bearing 32207 NBC", "Bearing 32208", "Bearing 32209", "Bearing 32209 NBC", "Bearing 32210 CBS", "Bearing 32210 NBC", "Bearing 32211 CBS", "Bearing 32211 NBC", "Bearing 32212", "Bearing 32212 NBC", "Bearing 32213 NBC", "Bearing 32214", "Bearing 32214 NBC", "Bearing 32308", "Bearing 32310", "BEARING 51113", "Bearing 51313 CBS", "Bearing 51314 CBS", "Bearing 51315", "Bearing 6004 RS HCH", "Bearing 6007", "Bearing 6012ZZ", "Bearing 6013 NBU", "Bearing 6201Z NBC", "Bearing 6202Z NBC", "Bearing 6203 ZZ", "Bearing 6203Z NBC", "Bearing 6204Z NBC", "Bearing 6204ZZ", "Bearing 6205Z NBC", "Bearing 6205ZZ MPZ", "Bearing 6206 NBC", "Bearing 6206ZZ", "Bearing Ls8", "Bearing MAHK 22211 MBK", "Bearing MAHK 22212 MBK", "Bearing MS 13 NBC", "Bearing MS10 NBC", "Bearing MS11 NBC", "Bearing MS11.5 NBC", "Bearing MS12 NBC", "Bearing MS14 NBC", "Bearing N210", "Bearing NBC - 539/ 532X", "Bearing NBC 6206Z", "Bearing Round Goli", "Bearing Sleave 1208S", "Bearing Sleave 1210K/s", "Bearing Sleave 1211S", "Bearing Sleave 1213S", "Bearing Sleeve 1206k", "Bearing Sleeve 1206S", "Bearing Sleeve 1208k", "Bearing Sleeve 1209S", "Bearing Sleeve 1210K", "Bearing Sleeve 1211k", "Bearing Sleeve 1212S", "Bearing Sleeve 1213k/s", "Bend  4 RingType 87.5 Deg Box 35 SWR", "Bend 160MM 6 Ring Type 87.5 Deg Box 12 SWR", "Bend 4 45 Deg Pasting Type SWR", "Bend 75MM 3 Ring Type 87.5 Deg Box 70 SWR", "Bitumen Belt Paste 1 Kg 2713", "Bitumen Belt Paste 20kg", "Bitumen Belt Paste 300 G", "Bitumen Belt Paste 4kg", "Casing Pipe 5 1250MM DN-CM Type 3 M", "MIRTEE 20x15 Pk 20 UPVC", "MP3 Grease 1kg", "MP3 Grease 200g", "MP3 Grease 500g", "MTA 25MM Box 500 UPVC", "MTA 32MM CPVC", "NAHNI TRAP W/O JALI 110 MM 4 Box 30 SWR", "P Trap Pasting Type 110x110MM Box 18 SWR", "P Trap Pasting Type 125x110MM Box 18 SWR", "Reducer 110x75 4x3 Box 35 SWR ring fit", "Reducer Bush 25x20 Box 500 UPVC", "Reducer Bush 32x25MM Box 300 UPVC", "Reducer Ring Type 160x110 6x4 Box 15 SWR", "Reducer Tee 25x20MM UPVC", "Rigid Agri Pipe 40MM 6Kg/cm2 3M", "Rigid Agri Pipe 50MM 6kg/cm2 3M", "Single TEE RIng Type 110MM 4 Box 25 SWR", "Single TEE W Door RIng Type 110MM 4 Box 20 SWR", "Step Over Bend 25mm CPVC", "Swept Tee Ring Type 160MM 6 Box 6 SWR", "SWR 3 75 MM Ringtype A 3M Single Socket", "SWR 4 110 MM Ringtype A 3M Single Socket", "Tank Connector 25MM Box 50 UPVC", "Tank Connector 25mm Pk 25 CPVC", "TEE 25MM Pk 25 CPVC", "TEE 32mm UPVC (100)", "Tee 50MM Rigid Agri PVC", "UCP 205-16 FKD", "UCP 205/16 HGMT", "UCP 206 FKD", "UCP 208-24 DWZY", "UCP 208/24 HGMT", "UCP 211 FKD", "UCT 210 FKD", "Union 25MM Box 100 UPVC", "Union 25MM Pk 25 CPVC", "UPVC 15 mm SCH-40 3 M Pack 50", "UPVC 20MM SCH-40 3M Pack 25", "UPVC 25 mm SCH-40 3 M Pack 25", "UPVC 32 MM SCH-40 3 M Pack 15"]


  return (
    <div className='container'>
      <table>
        <thead>
          <tr>
          <th>Name</th>
          <th>Code</th>
          <th>Gst</th>
          <th>Quantity</th>
          <th>Rate</th>
          <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {Name.map((num,i) => (
          <tr key={i}>
            <td>

          {isEditingName ? (
         <input
          type="text"
          value={Name[i]}
          onChange={e => handleChangeName(e,i)}
          onBlur={handleBlurName}
        />
       
      ) : (
        <div onClick={handlename}>{Name[i]}</div>
      )}
      <div className='List'>

{List.filter(list => list.includes(Name[i])).map(lists =>(
  <div > 
    {lists}
  </div>
))}
</div>

            </td>
            <td>

          {isEditingCode ? (
        <input
          type="text"
          value={Code[i]}
          onChange={e =>handleChangeCode(e,i)}
          onBlur={handleBlurCode}
        />
      ) : (
        <div onClick={handlecode}>{Code[i]}</div>
      )}

            </td>
            <td>

          {isEditinGst ? (
        <input
          type="text"
          value={Gst[i]}
          onChange={e =>handleChangeGst(e,i)}
          onBlur={handleBlurGst}
        />
      ) : (
        <div onClick={handleGst}>{Gst[i]}</div>
      )}

            </td>
            <td>

          {isEditinQuatity ? (
        <input
          type="number"
          value={Quantity[i]}
          onChange={e =>handleChangeQuantity(e,i)}
          onBlur={handleBlurQuantity}
        />
      ) : (
        <div onClick={handleQuantity}>{Quantity[i]}</div>
      )}

            </td>
            <td>

          {isEditinRate ? (
        <input
          type="number"
          value={Rate[i]}
          onChange={e =>handleChangeRate(e,i)}
          onBlur={handleBlurRate}
        />
      ) : (
        <div onClick={handleRate}>{Rate[i]}</div>
      )}

            </td>
            <td>
              {Amount[i]}
            </td>
          </tr>
          ))}
        </tbody>
      </table>
      <div className="total-wrapper">
        <div className="total-label">Total</div>
        <div className="total-value">{Total}</div>
      </div>
      <button onClick={addrow}>Add Product</button>
    
      <div className="cgst-container">
        <div className="cgst-label">CGST</div>
        <div className="cgst-value">{(16/Total)*100}</div>
      </div>
      <div className="cgst-container">
        <div className="cgst-label">SGST</div>
        <div className="cgst-value">{(16/Total)*100}</div>
      </div>
      <div className="cgst-container">
        <div className="cgst-label">RoundOff</div>
        <div className="cgst-value">{Rounded}</div>
      </div>
     
      {/* <div>Round Off</div><div>{round}</div> */}
      <div className="bottom-section">
        <div className="narration-label">Narration</div>
        <div className="narration-value">{Narration}</div>
      </div>

 
        

      </div>
  );
}


export default App;


