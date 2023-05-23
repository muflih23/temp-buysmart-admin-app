export const configs = {
  dateFormat: 'dd/MM/yyyy',
}

export const propsConfig = {
  dateNavBtnProps: {
    colorScheme: "red",
    variant: "outline"
  },
  dayOfMonthBtnProps: {
    defaultBtnProps: {
      borderColor: "red.300",
      _hover: {
        background: 'red.400',
        color: 'white',
      }
    },
    isInRangeBtnProps: {
      color: "white",
    },
    selectedBtnProps: {
      background: "red.200",
      color: "white",
    },
    todayBtnProps: {
      background: "red.400",
    }
  },
  inputProps: {
    size: "sm"
  },
  popoverCompProps: {
    popoverContentProps: {
      background: "white",
      color: "black",
    },
  },
}
