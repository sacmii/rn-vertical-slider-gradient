# rn-vertical-slider-gradient
*A vertical Slider for React Native written entirely in javascript that support linear gradient*

## Getting Started
![Example1](https://github.com/sacmii/rn-vertical-slider-gradient/blob/master/.github/sample1.gif)
![Example2](https://github.com/sacmii/rn-vertical-slider-gradient/blob/master/.github/sample2.gif)
* To add this slider to your project :
```
$ npm install rn-vertical-slider-gradient
```

## Dependencies
* *Requires [react-native-linear-gradient](https://github.com/react-native-community/react-native-linear-gradient)*

## Usage
* A basic example of slider
```
<VerticalSlider
          value={180}
          disabled={false}
          min={0}
          max={200}
          onChange={(value: number) => {
            // console.log("CHANGE", value);
          }}
          onComplete={(value: number) => {
            // console.log("COMPLETE", value);
          }}
          width={50}
          height={300}
          step={1}
          borderRadius={5}
          minimumTrackTintColor={[
            "#2ecc71",
            "#27ae60",
            "#f1c40f",
            "#f39c12",
            "#d35400",
            "#c0392b"
          ]}
          maximumTrackTintColor="#ecf0f1"
          showBallIndicator
          ballIndicatorTextColor={"white"}
        />
```

## Props

|Property|Type|Default|Description|
|:---|:---|:---|:---|
|value|number|0|Value of the slider.|
|disabled|bool|false|Enable or disable slider.|
|min|number|0|Minimum value for slider.|
|max|number|0|Maximum value for slider.|
|step|number|0|This value describes number of stepsto skip.|
|minimumTrackTintColor|Array|['#00000']|Array of colors must be supplied to minimumTrackTintColor.|
|maximumTrackTintColor|string|'#eee'|The top color.|
|onChange|function|null|Callback continuously called while the user is dragging the slider.|
|onComplete|function|null|Callback called when the user finishes changing the value (e.g. when the slider is released).|
|borderRadius|number|0|The border radius of component.|
|width|number|0|Width of the slider.|
|height|number|0|Height of the slider.|
|showBallIndicator|bool|false|To show or hide indicator.|
|ballIndicatorColor|string|null|Background color for Indicator. If none supplied then colors from *minimumTrackTintColor* are taken.|
|ballIndicatorWidth|number|48|Diameter of Indicator.|
|ballIndicatorPosition|number|-50|Horizontal position of Indicator with respect to current selected value.|
|ballIndicatorTextColor|string|'#fff'|Indicator text color.|

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
