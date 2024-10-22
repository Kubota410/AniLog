declare module '@react-native-community/segmented-control' {
    import { Component } from 'react'
    import { ViewStyle, TextStyle } from 'react-native'
  
    interface SegmentedControlProps {
      values: string[];
      selectedIndex?: number;
      onChange?: (event: { nativeEvent: { selectedSegmentIndex: number } }) => void;
      style?: ViewStyle;
      tintColor?: string;
      backgroundColor?: string;
      textStyle?: TextStyle;
      selectedBackgroundColor?: string;
      fontStyle?: TextStyle;
    }
  
    export default class SegmentedControl extends Component<SegmentedControlProps> {}
  }
  