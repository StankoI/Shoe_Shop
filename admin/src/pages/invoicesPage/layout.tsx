import { useEffect, useState } from "react"
import InvoiceList from "../../compoments/invoiceList/invoiceList"
import { Invoice } from "../../models/invoice"
import useAxiosPrivate from "../../hooks/useAxiosPrivate"
import AddInvoice from "../../compoments/addVoice/addInvoice"

const InvoicesLayout = () => {

    const axios = useAxiosPrivate()
    const [invoices, setInvoices] = useState<Invoice[]>([])

    useEffect(() => {

        const fetchData = async () => {
            try {
                const fetchedData = await axios.get('http://localhost:8080/admin/invoice');
                setInvoices(fetchedData.data);
            }
            catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [])

    const deleteInvoice = async (id: string) => {
        try{
            setInvoices(prev => prev.filter(invo => invo._id != id))
            await axios.delete(`http://localhost:8080/admin/invoice/${id}`)
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <div style={{marginTop:"4rem"}}>
            <AddInvoice/>
            <InvoiceList invoices={invoices} onDelete={deleteInvoice}/>
        </div>
    )
}

export default InvoicesLayout;