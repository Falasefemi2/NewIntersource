import React from 'react'
import Button from "../components/Button";
import LaySection from '../components/LaySection';
import operation from "../imgs1/img33.png"
import needle from '../imgs1/img34.png'
import whiteWoman from "../imgs1/img35.png"

const Health = () => {
  return (
    <>
    <div className="row">
      <div className="col-lg-6 about-main-body">
        <div className="mb-2 mb-lg-3">
          <h1 className="text-capitalize about-main-header">
          Health <br /> Insurance
          </h1>
          <p className="p8">The social security system provides workers and residents with most healthcare benefits. All residents have a Medicare card which entitles them to free healthcare in their province, including child care benefits. Some provinces make a separate charge for this system but others pay for it from taxation or contributions.</p>
          <Button
              text="Contact Us"
              className="works-btn py-3"
              links="/contact"
            />
        </div>
      </div>
      <div className="col-lg-6 cards">
        <div className="mb-2 mb-lg-3">
          <img src={operation} alt="" className='img-fluid' />
        </div>
      </div>
    </div>
    <div className="row row-cols-1 row-cols-md-2 g-3">
      <div className="col">
        <LaySection img={needle} headText='Canada Sick Leave' cardText='Despite the fact that Canada is economically primed for FDI and major growth, making a direct-hire there can be painful from an administrative perspective. Assuming that the process for hiring and setting up a payroll will be fairly straightforward, many organizations quickly discover that the labor legislation creates a series of complications that aren’t easy to overcome. Labor legislation is onerous in Canada.' />
      </div>
      <div className="col">
        <LaySection img={whiteWoman} headText='Maternity/Paternity Leave' cardText='Canada has very generous unpaid maternity and parental leaves for parents, including paternity leave in the province of Quebec, which applies only to fathers. The lengths of the leaves vary by province, averaging at about 17 weeks for maternity leave and 61 or 63 weeks for parental leaves. Parents can apply for government-paid employment insurance benefits while on leave if they fulfil the eligibility criteria.' />
      </div>
    </div>
  </>
  )
}

export default Health