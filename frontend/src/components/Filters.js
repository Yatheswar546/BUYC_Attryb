import React from 'react'

export default function Filters() {
  return (
  <>
   <div className="filters">
            <h3>Search Here</h3>
            <div className="brands">
                <h4>Brands</h4>
                <input type="checkbox" id="Maruti" name="Maruti" value="Maruti" />
                <label htmlFor="Maruti"> Maruti Suzuki</label><br></br>
                <input type="checkbox" id="Tata" name="Tata" value="Tat" />
                <label htmlFor="Tata"> Tata</label><br></br>
                <input type="checkbox" id="Hyundai" name="Hyundai" value="Hyundai" />
                <label htmlFor="Hyundai"> Hyundai</label><br></br>
                <input type="checkbox" id="Volkswagen" name="Volkswagen" value="Volkswagen" />
                <label htmlFor="Volkswagen">Volkswagen</label><br></br>
                <input type="checkbox" id="Honda" name="Honda" value="Honda" />
                <label htmlFor="Honda">Honda</label><br></br>
                <input type="checkbox" id="Ford" name="Ford" value="Ford" />
                <label htmlFor="Ford">Fprd</label><br></br>
                <input type="checkbox" id="Renault" name="Renault" value="Renault" />
                <label htmlFor="Renault">Renault</label><br></br>
                <input type="checkbox" id="Mahindra" name="Mahindra" value="Mahindra" />
                <label htmlFor="Mahindra">Mahindra</label><br></br>
            </div>
            <div className="years">
                <h4>Years</h4>
                <input type="checkbox" id="2012" name="2012" value="2012" />
                <label htmlFor="2012">2012</label><br></br>
                <input type="checkbox" id="2013" name="2013" value="2013" />
                <label htmlFor="2013">2013</label><br></br>
                <input type="checkbox" id="2015" name="2015" value="2015" />
                <label htmlFor="2015">2015</label><br></br>
                <input type="checkbox" id="2017" name="2017" value="2017" />
                <label htmlFor="2017">2017</label><br></br>
                <input type="checkbox" id="2018" name="2018" value="2018" />
                <label htmlFor="2018">2018</label><br></br>
                <input type="checkbox" id="2019" name="2019" value="2019" />
                <label htmlFor="2019">2019</label><br></br>
                <input type="checkbox" id="2020" name="2020" value="2020" />
                <label htmlFor="2020">2020</label><br></br>
                <input type="checkbox" id="2021" name="2021" value="2021" />
                <label htmlFor="2021">2021</label><br></br>
                <input type="checkbox" id="2022" name="2022" value="2022" />
                <label htmlFor="2022">2022</label><br></br>
            </div>
            <div className="colors">
                <h4>Colors</h4>
                <input type="checkbox" id="grey" name="grey" value="grey" />
                <label htmlFor="grey">Grey</label><br></br>
                <input type="checkbox" id="white" name="white" value="white" /> 
                <label htmlFor="white">White</label><br></br>
                <input type="checkbox" id="red" name="red" value="red" />
                <label htmlFor="red">Red</label><br></br>
                <input type="checkbox" id="silver" name="silver" value="silver" />
                <label htmlFor="silver">Silver</label><br></br>
                <input type="checkbox" id="black" name="black" value="black" />
                <label htmlFor="black">Black</label><br></br>
                <input type="checkbox" id="blue" name="blue" value="blue" />
                <label htmlFor="blue">Blue</label><br></br>
                <input type="checkbox" id="green" name="green" value="green" />
                <label htmlFor="green">Green</label><br></br>
                <input type="checkbox" id="orange" name="orange" value="orange" />
                <label htmlFor="orange">Orange</label><br></br>
            </div>
            <div className="mileage">
                <h4>Mileage</h4>
                <input type="checkbox" id="Above 10000" name="Above 10000" value="Above 10000" />
                <label htmlFor="Above 10000">Above 10000</label><br></br>
                <input type="checkbox" id="Above 20000" name="Above 20000" value="Above 20000" />
                <label htmlFor="Above 20000">Above 15000</label><br></br>
                <input type="checkbox" id="Above 30000" name="Above 30000" value="Above 30000" />
                <label htmlFor="Above 30000">Above 30000</label><br></br>
                <input type="checkbox" id="Above 40000" name="Above 40000" value="Above 40000" />
                <label htmlFor="Above 40000">Above 45000</label><br></br>
                <input type="checkbox" id="Above 50000" name="Above 50000" value="Above 50000" />
                <label htmlFor="Above 50000">Above 60000</label><br></br>
                <input type="checkbox" id="Above 75000" name="Above 75000" value="Above 75000" />
                <label htmlFor="Above 75000">Above 75000</label><br></br>
                <input type="checkbox" id="Above 90000" name="Above 90000" value="Above 90000" />
                <label htmlFor="Above 90000">Above 90000</label><br></br>
                <input type="checkbox" id="Above 105000" name="Above 105000" value="Above 105000" />
                <label htmlFor="Above 105000">Above 105000</label><br></br>
            </div>

        </div>

  
  </>
  )
}
