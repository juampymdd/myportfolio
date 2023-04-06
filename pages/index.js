import Layout from "../components/layout";
import { proyects, skills } from "../profile";
import { experiences } from "../profile";
const index = () => (
  <Layout>
    {/* Header card */}
    <header className="row mt-5">
      <div className="col-md-12">
        <div className="card bg-secondary text-white">
          <div className="row">
            <div className="col-md-4 d-flex align-items-center justify-content-center p-4">
              <img
                src="/images/profile.jpeg"
                alt="profile"
                className="rounded img-fluid"
              />
            </div>
            <div className="col-md-8 p-4">
              <h1>Juan Pablo Maddoni</h1>
              <h5 className="text-center text-success">Javascript Full Stack Developer</h5>
              <p className="">
                I'm a systems analyst with 5 years of experience in web
                development and an intermediate level of English. Currently, I'm
                working on projects as a full-stack developer using technologies
                developed in Javascript, such as Nest.js for backend and Next.js
                for frontend, and GitLab/GitHub with Docker for automatic
                deployment and DevOps. I'm passionate about my work and always
                looking for opportunities to learn and improve in my career.
              </p>
              <a href="/hireme" className="btn btn-success btn-sm">
                Hire me
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/* Second Section */}

    <div className="row mt-2">
      <div className="col-md-4" id="skils">
        <div className="card bg-secondary" >
          <div className="card-body">
            <h3>Skills</h3>
            <p>the technologies that i was learning.</p>
            {skills.map(({ name, level }, index) => (
              <div className="p-3" key={index}>
                <h5>{name}</h5>
                <div className="progress">
                  <div
                    className="progress-bar bg-success progress-bar-striped"
                    role="progressbar"
                    style={{ width: `${level}%` }}
                  >
                    {level}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-8 mb-2" id="experience">
        <div className="card bg-pan-top">
          <div className="card-body">
            <h3 className="mb-3">Experience</h3>
            {experiences
              .sort((a, b) => (a.from > b.from ? -1 : 1))
              .slice(0, 3)
              .map(({ title, description, from, to }, index) => (
                <div className="p-3 m-2" key={index}>
                  <fieldset>
                    <legend>
                      <h4 className="text-success">{title}</h4>
                    </legend>

                    <h5>
                      {from} - {to ? to : "Present"}
                    </h5>
                    <p>{description}</p>
                  </fieldset>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>

    {/* Portfolio */}
    <div className="row mt-5" id="portfolio">
      <div className="col-md-12">
        <div className="card card-body bg-secondary">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center">Portfolio</h1>
              </div>

                {
                  proyects.map(({name, description, image, url}, index) => (
                    <div className="col-md-4 p-2" key={ index }>
                    <div className="card h-100">
                      <div className="overflow">
                        <img 
                          src={`images/${image}`} 
                          alt="portfolio1" 
                          className="card-img-top"
                        />
                      </div>
                      
                      <div className="card-body">
                        <h3>{ name }</h3>
                        <p>{ description }</p>
                        <a 
                          href={ url }
                          target="_blank"
                          className="btn btn-success btn-sm">
                            View</a>
                      </div>
                    </div>
                  </div>
                  ))
                }
              
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default index;
