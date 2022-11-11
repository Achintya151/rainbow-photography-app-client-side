import React from 'react';

const AddService = () => {

    const handleAddService = e => {
        e.preventDefault();
        const form = e.target;
        const service_id = form.service_id.value;
        const img = form.img.value;
        const charge = form.charge.value;
        const title = form.title.value;
        const description = form.description.value;

        const addService = {
            service_id,
            img,
            charge,
            title,
            description
        }

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('Service successfully added')
                    form.reset();
                }
            })
            .catch(e => console.error(e))
    }

    return (
        <div>
            <h2 className='text-5xl text-center font-bold mb-8'>Add services</h2>
            <form onSubmit={handleAddService}>
                <div className='flex flex-col items-center gap-4 mb-10 form-control'>
                    <input name='service_id' type="text" placeholder="Service ID" className="input input-bordered w-full max-w-xs" />
                    <input name='title' type="text" placeholder="Title" className="input input-bordered w-full max-w-xs" />
                    <input name='img' type="text" placeholder="Image URL" className="input input-bordered w-full max-w-xs" />
                    <input name='charge' type="text" placeholder="Charge" className="input input-bordered w-full max-w-xs" />
                    <input name='description' type="text" placeholder="Description" className="input input-bordered w-full max-w-xs" />
                    <input className='btn btn-ghost' type="submit" value="Submit" />
                </div>

            </form>

        </div>
    );
};

export default AddService;