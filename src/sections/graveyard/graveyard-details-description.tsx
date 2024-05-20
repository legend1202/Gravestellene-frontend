import Markdown from "src/components/markdown";

// ----------------------------------------------------------------------

type Props = {
  content: string | any;
};

export default function GraveyardDetailsDescription({ content }: Props) {
  //   const tempDesc = `
  //   <h6>The Cemetery of Our Saviour</h6>

  //   <br/>
  //   <br/>

  //   <h6>About US</h6>
  //   <br/>
  //   <ul>
  //     <li><p>The Cemetery of Our Saviour is a cemetery in Oslo, Norway, located north of Hammersborg in Gamle Aker district.</p></li>
  //     <li><p>It is located adjacent to the older Old Aker Cemetery and was created in 1808 as a result of the great famine and cholera epidemic of the Napoleonic Wars.</p></li>
  //     <li><p>Its grounds were extended in 1911</p></li>
  //   </ul>

  //   <br/>
  //   <br/>

  //   <h6>Benefits</h6>
  //   <br/>
  //   <ul>
  //     <li>
  //       <p>Mesh and synthetic materials on the upper keep the fluid look of the OG while adding comfort</p>
  //       and durability.
  //     </li>
  //     <li>
  //       <p>Originally designed for performance running, the full-length Max Air unit adds soft, comfortable cushio</p>
  //       ning underfoot.
  //     </li>
  //     <li><p>The foam midsole feels springy and soft.</p></li>
  //     <li><p>The rubber outsole adds traction and durability.</p></li>
  //   </ul>

  //   <br/>
  //   <br/>

  //   <h6>Delivery and Returns</h6>
  //   <br/>
  //   <p>Your order of $200 or more gets free standard delivery.</p>
  //   <br/>
  // `;
  return (
    <Markdown
      children={content}
      sx={{
        p: 3,
        "& p, li, ol": {
          typography: "body2",
        },
        "& ol": {
          p: 0,
          display: { md: "flex" },
          listStyleType: "none",
          "& li": {
            "&:first-of-type": {
              minWidth: 240,
              mb: { xs: 0.5, md: 0 },
            },
          },
        },
      }}
    />
  );
}
