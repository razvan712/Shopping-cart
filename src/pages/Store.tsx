
import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import storeItems from "../data/items.json"

export function Store() {
  return (
    <>

        <h1 className='mx-auto' style={{textAlign:'center', color: '#6C63FF'}}>Store
         </h1>
     <div className='mx-auto my-4' style={{background: '#6C63FF', height: '2px', width:'40vw'}}>
     </div>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  )
}