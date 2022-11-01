function TopLayout({btnSearch}) {
    return (
        <div className="row row__mod top-layout">
            <div className="col-12 fixed-top">
                <div className="container h-100">
                    <div className="row row__mod h-100">
                        <div className="col-12">
                            <nav className="navbar navbar-expand-lg bg-light">

                                <a className="navbar-brand" href="#"></a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                    <div className="offcanvas-header">
                                        <h3 className="offcanvas-title" id="offcanvasNavbarLabel">BCR</h3>
                                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div className="offcanvas-body">
                                        <ul className="navbar-nav ms-auto">

                                            <li className="nav-item">
                                                <a
                                                    className="nav-link active"
                                                    aria-current="page"
                                                    href="/#our-services"
                                                >Our Services</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/#why-us">Why Us</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/#carousel-content"
                                                >Testimonial</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/#faq">FAQ</a>
                                            </li>
                                            <li id="end-nav" className="nav-item pe-0">
                                                <a className="nav-link btn btn-success d-inline-block" href="#" >Register</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 content">
                <div className="container h-100">
                    <div className="row row__mod h-100">
                        <div className="col-12">
                            <div className="row row__mod h-100">
                                <div className="col-md">
                                    <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                                    <p className="text-top-layout">
                                        Selamat datang di Binar Car Rental. Kami menyediakan mobil
                                        kualitas terbaik dengan harga terjangkau. Selalu siap
                                        melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                                    </p>
                                    {btnSearch}
                                </div>
                                <div className="col-md col-img">
                                    <img
                                        width="100%"
                                        height="100%"
                                        src={`${process.env.PUBLIC_URL}/images/img_car.png`}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopLayout;