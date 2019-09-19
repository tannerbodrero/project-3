import React from "react"


class Home extends Component {
  state = {
      offers: [],
      img: "",
      name: "",
      details: "",
      postedBy: "",
      lookingFor: "",
      email: ""
  };
  
    return (
        <section>
            <div>
                <h1>
                    Hello, this is the garage trader Home Page
                </h1>
            </div>
        </section>
    )
}

export default Home;