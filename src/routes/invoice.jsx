import { useParams } from 'react-router-dom';
import { getInvoice } from '../data';
import { connect } from 'react-redux';

const invoiceComponent = (props) => {
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10), props.invoices);
  if (invoice)
    return (
      <main
        style={{
          padding: '1rem',
        }}
      >
        <h2>Total Due: {invoice.amount}</h2>
        <p>
          {invoice.name}: {invoice.number}
        </p>
        <p>Due Date: {invoice.due}</p>
      </main>
    );
  else return <div> </div>;
};

const mapStateToProps = function (state) {
  return {
    invoices: state.invoiceList.invoiceList,
  };
};

export default connect(mapStateToProps)(invoiceComponent);
