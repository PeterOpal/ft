<template>
      <div class="container-fluid bg-light py-5">
            <div class="col-md-6 m-auto text-center">
                <h1 class="h1">Contact Us</h1>
                <p>
                    Reach out to us for any inquiries or feedback, we're here to listen and assist!
                </p>
            </div>
        </div>
    <iframe @load="mapLoaded = true" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101301.06041160642!2d17.035177943235848!3d48.148986832624146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c89360aca6197%3A0x631f9b82fd884368!2sBratislava!5e0!3m2!1sen!2ssk!4v1705843064986!5m2!1sen!2ssk" width="100%" height="300px" style="border:0;" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    <div v-if="mapLoaded">
        <div class="container py-5">
            <div class="row py-5">
                <form class="col-md-9 m-auto" method="post" role="form">
                    <div class="row">
                        <div class="form-group col-md-6 mb-3">
                            <label for="inputname">Name</label>
                            <input type="text" class="form-control mt-1" id="name" name="name" placeholder="Name">
                        </div>
                        <div class="form-group col-md-6 mb-3">
                            <label for="inputemail">Email</label>
                            <input type="email" class="form-control mt-1" id="email" name="email" placeholder="Email">
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="inputsubject">Subject</label>
                        <input type="text" class="form-control mt-1" id="subject" name="subject" placeholder="Subject">
                    </div>
                    <div class="mb-3">
                        <label for="inputmessage">Message</label>
                        <textarea class="form-control mt-1" id="message" name="message" placeholder="Message" rows="8"></textarea>
                    </div>
                    <div class="row">
                        <div class="col text-end mt-2">
                            <button disabled type="submit" class="btn btn-success btn-lg px-3">Let’s Talk</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

<div v-else class="d-flex justify-content-center align-items-center" style="height: 150px;">
    <div class="text-center">
        <img src="/src/assets/img/ajax-loader.gif" alt="Loading" style="height: 50px;">
    </div>
</div>

</template>

<script>
export default {
    data() {
        return {
            mapLoaded: false, 
        };
    },
}
</script>
