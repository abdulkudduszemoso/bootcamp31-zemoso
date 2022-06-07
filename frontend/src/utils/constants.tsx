import Body from "../../public/assets/images/body.svg";
import Covid from "../../public/assets/images/covid.svg";
import Liver from "../../public/assets/images/liver.svg";
import BloodTest from "../../public/assets/images/bloodtest.svg";
import Diabetes from "../../public/assets/images/diabetes-test.svg";
import Kidney from "../../public/assets/images/kidney.svg";
import Thyroid from "../../public/assets/images/thyroid.svg";
import Lipid from "../../public/assets/images/lipid.svg";
import Esther from '../../public/assets/images/esther.svg'
import LabTechnician from '../../public/assets/images/labtechnician.svg'
import Check from '../../public/assets/images/check.svg'
import Flask from '../../public/assets/images/flask.svg'
import SampleCollection from '../../public/assets/images/samplecollection.svg'
import Report from '../../public/assets/images/reportsgray.svg'
import React from "react";

export const jumbotron = {
  TEXT1: "60% off on your first order",
  TEXT2: "Your health is our priority",
  BUTTON: "Book now",
};
export const primaryCardListConst = {
  TITLE: "Why Choose Us",
  TITLE1: "1600+ Tests",
  TITLE2: "At Home Services",
  TITLE3: "Certified Professionals",
  TITLE4: "CLIA Certified Labs",
  TITLE5: "Reports in 24-48 Hours",
  TITLE6: "Safe and Hygenic",
};
export const orderPlacedConst = {
  cons1:"Your order has been placed",
  const2:"Instructions",
  const3:"Please don't eat or drink anything other than water for 8 -10 hours  prior to the appointment.",
  
}

export const TestInfoMainCardConst={
  const1:"Covid RTPCR Test",
  const2:"Why you should book this package?",
  const3:[
    "To check if you have an active COVID-19 infection",
    "If you are showing symptoms of COVID-19 infection",
    "If you had a contact with someone with confirmed COVID-19",
  ]
}

export const CommonlyBookedTests = [
  {
    name: "Full Body Check",
    image: Body,
  },
  {
    name: "Covid RTPCR",
    image: Covid,
    to: "/CovidRTPCR",
  },
  {
    name: "Liver Function Test",
    image: Liver,
  },
  {
    name: "Complete Blood Count",
    image: BloodTest,
  },
  {
    name: "Diabetes Test",
    image: Diabetes,
  },
  {
    name: "Kidney Function Test",
    image: Kidney,
  },
  {
    name: "Thyroid Test",
    image: Thyroid,
  },
  {
    name: "Lipid Profile",
    image: Lipid,
  },
];
export const FooterMenu = [
  {
    title: 'Home'
  },
  {
    title: 'Contact us'
  },
  {
    title: 'Privacy Policy'
  },
  {
    title: 'Terms and Conditions'
  }
]

export const Months = [
  {
    month: 'January',
    index: 0
  }, 
  {
    month: 'February',
    index: 1
  }, 
  {
    month: 'March',
    index: 2
  }, 
  {
    month: 'April',
    index: 3
  }, 
  {
    month: 'May',
    index: 4
  }, 
  {
    month: 'June',
    index: 5
  }, 
  {
    month: 'July',
    index: 6
  }, 
  {
    month: 'August',
    index: 7
  }, 
  {
    month: 'September',
    index: 8
  }, 
  {
    month: 'October',
    index: 9
  }, 
  {
    month: 'November',
    index: 10
  }, 
  {
    month: 'December',
    index: 11
  }
]

export const Days = [
  {
    day: 'Mon',
    date: '01',
    index: 0
  },
  {
    day: 'Tue',
    date: '02',
    index: 1
  },
  {
    day: 'Wed',
    date: '03',
    index: 2
  },
  {
    day: 'Thu',
    date: '04',
    index: 3
  },
  {
    day: 'Fri',
    date: '05',
    index: 4
  },
  {
    day: 'Sat',
    date: '06',
    index: 5
  },
  {
    day: 'Mon',
    date: '08',
    index: 6
  },
  {
    day: 'Tue',
    date: '09',
    index: 7
  },
  {
    day: 'Wed',
    date: '10',
    index: 8
  },
  {
    day: 'Thu',
    date: '11',
    index: 9
  },
  {
    day: 'Fri',
    date: '12',
    index: 10
  },
  {
    day: 'Sat',
    date: '13',
    index: 11
  },
  {
    day: 'Mon',
    date: '15',
    index: 12
  },
  {
    day: 'Tue',
    date: '16',
    index: 13
  },
  {
    day: 'Wed',
    date: '17',
    index: 14
  },
  {
    day: 'Thu',
    date: '18',
    index: 15
  },
  {
    day: 'Fri',
    date: '19',
    index: 16
  },
  {
    day: 'Sat',
    date: '20',
    index: 17
  },
  {
    day: 'Mon',
    date: '22',
    index: 18
  },
  {
    day: 'Tue',
    date: '23',
    index: 19
  },
  {
    day: 'Wed',
    date: '24',
    index: 20
  },
  {
    day: 'Thu',
    date: '25',
    index: 21
  },
  {
    day: 'Fri',
    date: '26',
    index: 22
  },
  {
    day: 'Sat',
    date: '27',
    index: 23
  },
  {
    day: 'Mon',
    date: '29',
    index: 24
  },
  {
    day: 'Tue',
    date: '30',
    index: 25
  }
]

export const Time = [
    {
        index: 0,
        time: '06.00 - 07.00 AM'
    },
    {
        index: 1,
        time: '07.00 - 08.00 AM'
    },
    {
        index: 2,
        time: '08.00 - 09.00 AM'
    },
    {
        index: 3,
        time: '09.00 - 10.00 AM'
    },
    {
        index: 4,
        time: '10.00 - 11.00 AM'
    },
    { 
        index: 5,
        time: '11.00 - 12.00 PM'
    },
    {
        index: 6,
        time: '12.00 - 01.00 PM'
    },
    {
        index: 7,
        time: '01.00 - 02.00 PM'
    },
    {
        index: 8,
        time: '02.00 - 03.00 PM'
    },
    {
        index: 9,
        time: '03.00 - 04.00 PM'
    },
    {
        index: 10,
        time: '04.00 - 05.00 PM'
    },
    {
        index: 11,
        time: '05.00 - 06.00 PM'
    }
]

export const StepperData = [
    {
        text: 'Order Placed',
        subText: 'Placed on Mon, 22 Feb, 11.00 AM',
        icon: Check,
        imgWidth: 22,
        imgHeight: 22
    },
    {
        text: 'Lab technician assigned',
        subText: 'Esther Howard',
        subIcon: Esther,
        icon: LabTechnician,
        imgWidth: 20,
        imgHeight: 20
    },
    {
        text: 'Sample Collection',
        subText: 'On Tue, 23 Feb, 7.00 - 8.00 AM',
        icon: SampleCollection,
        imgWidth: 20,
        imgHeight: 18.37
    },
    {
        text: 'Sample being examined',
        subText: 'Estimated time - 24 hours',
        icon: Flask,
        imgWidth: 12.62,
        imgHeight: 20
    },
    {
        text: 'Report ready',
        icon: Report,
        imgWidth: 13.33,
        imgHeight: 16.67
    }
]
