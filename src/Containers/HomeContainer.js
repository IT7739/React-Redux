import { connect } from "react-redux";
import addToCart from "../Services/Actions/action";
import Home from "../Components/Home"

const mapStateToProps = state =>({
    cardData:state.state
})

const mapDispatchToProps = dispatch =>({
    addToCartHandler:data=>dispatch(addToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)


// export default Home;