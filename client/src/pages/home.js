import React from "react"

class Home extends React.Component {
    state = {
        offers
    };
   
    componentDidMount() {
      this.loadItems();
    }
   
    loadOffers = () => {
      API.getItems()
        .then(res =>
          this.setState({ offers: res.data})
          )
          .catch(err => console.log(err));
    };

function Home() {
    return (
        <section>
            <div>
                this.state.offers.map(
                    
                )
            </div>
        </section>
    )
}

export default Home;