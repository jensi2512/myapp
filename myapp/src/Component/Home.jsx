import '../static/Home.css'

function Home() {
  return (
    <>
      <div className="main">

        <div className="center">
          <h1>Selling on the internet like a pro</h1>
          <p>
            We know how large objects will act, but things on a small scale just
            do not act that way.
          </p>
          <div className="buttons">
            <a href="">Get Quote Now</a>
            <a href="">Learn More</a>
          </div>
        </div>
        <div className="cards">
          <div className="card">
            <img
              src="https://cdn3.iconfinder.com/data/icons/emoji-81/48/6-1024.png"
              alt="image"
            />
            <h3>Training Courses</h3>
            <p>
              The gradual accumulation of information about atomic and small-scale
              behavior...
            </p>
          </div>
          <div className="card">
            <img
              src="https://thumbs.dreamstime.com/b/green-double-checking-icon-double-tick-check-mark-flat-done-sticker-icon-isolated-white-accept-button-green-double-checking-261549345.jpg"
              alt=""
            />
            <h3>2,769 Online Courses</h3>
            <p>
              The gradual accumulation of information about atomic and small-scale
              behavior...
            </p>
          </div>
          <div className="card">
            <img
              src="https://images.emojiterra.com/google/android-12l/512px/1f4b3.png"
              alt=""
            />
            {/* <!-- <div className="card" style="background-color: #00a8cc;"> --> */}
            <h3>Training Courses</h3>
            <p>
              The gradual accumulation of information about atomic and small-scale
              behavior...
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
export default Home;