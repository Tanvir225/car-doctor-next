import UpdateForm from '@/app/Component/Bookings/UpdateForm';
import React from 'react';

const UpdateBooking =({params}) => {
  
    return (
        <div>
            <UpdateForm _id={params.id}></UpdateForm>
        </div>
    );
};

export default UpdateBooking;