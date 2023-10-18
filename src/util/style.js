export const styles ={
      paddingX:'sm:px-16 px-6',
      paddingY:'sm:py-8 py-4',
      padding:'sm:p-8 p-4',
      marginX:'sm:mx-16  mx-6',
      marginY: 'sm:my-8 my-4',
      margin: 'sm:mx-16 mx-6 sm:my-8 my-4',
      flexCenter : 'flex justify-center items-center',
      flexStart: ' flex justify-start items-center',
      paragraph : 'text-[18px] font-normal text-lightWhite font-montserrat',
      container:'xl:max-w-1280px w-full',
      heading1 : 'font-montserrat font-semibold ss:text-[72px] text-[48px] text-white xs:leading-[100px] leading-[65px]',
      heading2 : 'font-montserrat font-semibold xs:text-[48px] text-[32px] text-white xs:leading-[76.8px] leading-[66.8px]',

}
export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  sectionIfo: `flex-1 ${styles.flexStart} flex-col`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 relative `,
  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative `,
};