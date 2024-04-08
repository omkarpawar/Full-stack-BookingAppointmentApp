document.addEventListener('DOMContentLoaded',()=>{
    const form = document.getElementById('bookingForm');
    const bookingList = document.getElementById('bookingList');


    form.addEventListener('submit',async (event)=>{
        event.preventDefault();

        const formData= new FormData(form);
        const name = formData.get('name');
        const phone = formData.get('phone');
        const email = formData.get('email');
        

        try{
            const response =await axios.post('/bookings',{name,phone,email});

            if(!response.data.success){
                throw new Error(response.data.error);
            }
            
            displayBooking(response.data.booking);
        }catch(error){
            console.log(error.message);
        }
    });

    async function fetchBookings(){
        try{
            const response = await axios.get('/bookings');
            console.log(response.data.booking)
            const bookings = response.data.booking;

            
            if (bookings && bookings.length > 0) {
                bookings.forEach(booking => displayBooking(booking));
            } else {
                console.log("No bookings found");
            }    
        }catch(error){
            console.error(error.message);
        }
    }

    function displayBooking(booking){
        const bookingItem = document.createElement('div');
        bookingItem.textContent = `${booking.name},${booking.phone},${booking.email}`;
        bookingList.appendChild(bookingItem);


        const deleteBtn=document.createElement('button');
        deleteBtn.setAttribute('data-id', booking.id);
        deleteBtn.appendChild(document.createTextNode('Delete'));
        bookingList.appendChild(deleteBtn);
        deleteBtn.addEventListener('click', async () => {
            try {
                const response = await axios.delete(`/bookings/${booking.id}`);
                if (response.data.success) {
                    // Remove booking item from UI
                    bookingItem.remove();
                    deleteBtn.remove();
                }
            } catch (error) {
                console.error('Error:', error.message);
            }
        });
    }
    fetchBookings();
});