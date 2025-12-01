import "./SizeChart.css";

export default function SizeChart() {
  return (
    <div className="size-chart-page">
      <h1 className="title">EKAMMI SIZE CHART</h1>

      {/* Measurement Guide Image */}
      <div className="size-img">
        <img
          src={"/images/size_chart.jpeg"} // your uploaded guide image
          alt="Size Measurement Guide"
        />
      </div>

      {/* Inches Table */}
      <h2 className="table-title">INCHES</h2>
      <table className="size-table">
        <thead>
          <tr>
            <th>SIZE</th>
            <th>XS</th>
            <th>S</th>
            <th>M</th>
            <th>L</th>
            <th>XL</th>
            <th>XXL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>BUST</td>
            <td>34</td>
            <td>36</td>
            <td>38</td>
            <td>40</td>
            <td>42</td>
            <td>44</td>
          </tr>
          <tr>
            <td>WAIST</td>
            <td>30</td>
            <td>32</td>
            <td>34</td>
            <td>36</td>
            <td>38</td>
            <td>40</td>
          </tr>
          <tr>
            <td>HIP</td>
            <td>36</td>
            <td>38</td>
            <td>40</td>
            <td>42</td>
            <td>44</td>
            <td>46</td>
          </tr>
        </tbody>
      </table>

      {/* Centimeter Table */}
      <h2 className="table-title">CENTIMETER</h2>
      <table className="size-table">
        <thead>
          <tr>
            <th>SIZE</th>
            <th>XS</th>
            <th>S</th>
            <th>M</th>
            <th>L</th>
            <th>XL</th>
            <th>XXL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>BUST</td>
            <td>86.36</td>
            <td>91.44</td>
            <td>96.52</td>
            <td>101.60</td>
            <td>106.68</td>
            <td>111.76</td>
          </tr>
          <tr>
            <td>WAIST</td>
            <td>76.20</td>
            <td>81.28</td>
            <td>86.36</td>
            <td>91.44</td>
            <td>96.52</td>
            <td>101.60</td>
          </tr>
          <tr>
            <td>HIP</td>
            <td>91.44</td>
            <td>96.52</td>
            <td>101.60</td>
            <td>106.68</td>
            <td>111.76</td>
            <td>116.84</td>
          </tr>
        </tbody>
      </table>

      {/* Note */}
      <p className="size-note">
        Sizes can vary from 2-3 centimeters because they are measured by hand.
        1 inch = 2.54 cm.
        The size mentioned on a label can differ from the one you have ordered.
      </p>
    </div>
  );
}
