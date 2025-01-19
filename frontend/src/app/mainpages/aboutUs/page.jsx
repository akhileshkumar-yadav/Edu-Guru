import React from 'react'

const AboutUs = () => {
    return (
        <div>
            <section className="bg-gray-100">
                <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                        <div className="max-w-lg">
                            <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
                                About Us
                            </h2>
                            <h1 className='text-xl mt-3 font-medium text-gray-700'> Welcome to TopFiveEduGuru!</h1>
                            <p className="mt-4 text-gray-600 text-lg">


                                TopFiveEduGuru is a one-stop platform designed to help students, parents, and educators make informed decisions about schools, colleges, and universities. We believe that choosing the right educational institution is the foundation of a successful career and a bright future.
                            </p>
                            <p className='mt-4 text-gray-600 text-lg'>
                            Our mission is to simplify the selection process by providing a curated list of the Top 5 Institutions in every category. Whether you’re exploring the best schools for your child, searching for top-ranking colleges for higher education, or evaluating universities for advanced studies, we’ve got you covered.
                            </p>
                            <div className="mt-8">
                                <a
                                    href="#"
                                    className="text-blue-500 hover:text-blue-600 font-medium"
                                >
                                    Learn more about us
                                    <span className="ml-2">→</span>
                                </a>
                            </div>
                        </div>
                        <div className="mt-12 md:mt-0">
                            <img
                                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                                alt="About Us Image"
                                className="object-cover rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default AboutUs