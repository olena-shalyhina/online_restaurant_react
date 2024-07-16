import { FC, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

export const Cart: FC = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  return (
    <>
      <Button variant="danger" onClick={toggleShow} className="me-2">
        <i className="bi bi-cart-check-fill fs-5"></i>
      </Button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        variant="dark"
        className="bg-secondary"
      >
        <Offcanvas.Header closeButton className="bg-danger">
          <Offcanvas.Title className="bg-danger">YOUR ORDERS</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt fuga
          nesciunt ullam numquam repudiandae doloribus nisi quae maxime magnam
          repellendus fugiat porro recusandae quo amet necessitatibus doloremque
          omnis inventore ipsum, labore voluptatum laudantium. Vitae architecto,
          ea inventore tempora animi consequuntur debitis eius sunt
          reprehenderit id rerum corporis dicta quos, a quia tenetur quis
          eveniet et? Molestiae, laudantium! Doloribus nemo hic ullam neque
          rerum accusamus id ex, similique eos dolor eveniet nihil quibusdam non
          cumque assumenda. Quisquam mollitia magni eos reprehenderit, odit
          sapiente qui. Quam perspiciatis iusto quos facilis deserunt animi,
          aliquam nesciunt totam quasi dolores unde, accusamus nisi sint, enim
          placeat maxime recusandae. Sapiente excepturi laborum corporis sequi
          esse eveniet dolores quasi eius, aperiam exercitationem qui tempora
          atque corrupti saepe labore eligendi officia ullam nihil repellendus
          accusantium, nam magni, quaerat cum ex. Dolorem deserunt perspiciatis
          repellendus suscipit eius libero animi excepturi quam, modi quis
          ducimus voluptas, sequi quas enim expedita a distinctio delectus
          obcaecati facere tenetur! Voluptatibus fugit maiores consectetur dicta
          dolorum praesentium in. Dolor quo id tempore recusandae voluptatem in
          laboriosam nulla esse eveniet quia fugit minima quisquam reprehenderit
          vitae facere possimus quis cum, natus qui odio tempora perspiciatis
          inventore! Consequatur ipsam similique voluptatibus? Iusto aperiam
          recusandae dolorem atque! Ad fuga sunt dignissimos, doloremque itaque
          dolor voluptatem exercitationem! Suscipit nisi nam ad quasi eum facere
          pariatur, nostrum saepe molestias omnis, ipsam eos amet ipsa, optio
          architecto velit aliquam itaque voluptate commodi! Laudantium minima
          dicta sequi maxime natus corporis amet saepe tenetur distinctio nemo
          ipsum modi aperiam delectus dolorum magni nihil, fuga esse explicabo
          eos placeat voluptatem, numquam nobis rerum. Ad non veniam aperiam
          commodi rerum illum ipsa dolor at adipisci minima distinctio eum vero
          accusantium quia, sit officia vel quos voluptates magni quaerat
          quibusdam delectus ipsam. Ex soluta eveniet quidem, incidunt voluptate
          blanditiis earum veniam asperiores alias culpa ipsam quisquam qui
          velit cupiditate? Quae veniam quisquam eligendi enim dicta quibusdam
          sequi. Pariatur fugit libero architecto voluptas saepe error eos harum
          delectus quis hic, assumenda adipisci dignissimos suscipit nemo?
          Distinctio eligendi, nam voluptatum laboriosam tempore tempora, ex quo
          maxime ab modi rerum expedita temporibus aut aperiam assumenda at,
          soluta vitae maiores mollitia quae? Quo similique incidunt at, numquam
          libero reiciendis nisi, accusantium cum nesciunt delectus fugit,
          facere perspiciatis aliquam necessitatibus voluptate obcaecati
          voluptas ullam alias repellendus quod quidem. Quam, illum quae ea ut
          temporibus omnis, quidem ducimus iure dolorem dignissimos dicta labore
          vitae inventore tempora assumenda ipsam impedit numquam reprehenderit
          odit. Illum, beatae architecto blanditiis impedit vero voluptatibus
          temporibus minima modi neque repellendus sed, aspernatur ipsa est
          iste? Molestias eius, tenetur totam recusandae dicta consequuntur vel
          reiciendis suscipit facere architecto doloribus praesentium at iste
          rerum libero vitae eligendi ducimus dolorum commodi sed ipsa pariatur
          nisi earum adipisci! Quisquam natus ratione tempora, odit velit
          facere, voluptas dolore incidunt officiis molestiae suscipit
          recusandae veritatis provident nisi voluptatem laudantium totam. Dolor
          quidem quod, aperiam quaerat accusantium voluptatem molestiae et
          dolore sint nihil quia natus adipisci sit quas ducimus possimus
          quibusdam odio excepturi suscipit, cumque quo! Veritatis totam
          laboriosam, dolore dolorem expedita fugiat placeat?
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
