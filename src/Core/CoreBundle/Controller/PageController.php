<?php

namespace Core\CoreBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Core\CoreBundle\Entity\Enquiry;
use Core\CoreBundle\Form\EnquiryType;

class PageController extends Controller
{
    public function indexAction()
    {
        $enquiry = new Enquiry();
        $form = $this->createForm(new EnquiryType(), $enquiry);

        $request = $this->getRequest();
        if ($request->getMethod() == 'POST')
        {
            $form->bindRequest($request);

            if ($form->isValid())
            {
                $message = \Swift_Message::newInstance()
                    ->setSubject('Contact enquiry from symblog')
                    ->setFrom('enquiries@symblog.co.uk')
                    ->setTo('riseuprocks@gmail.com')
                    ->setBody($this->renderView('BloggerBlogBundle:Page:index.html.twig', array('enquiry' => $enquiry)));
                $this->get('mailer')->send($message);

                $this->get('session')->setFlash('blogger-notice', 'Your contact enquiry was successfully sent. Thank you!');

                return $this->redirect($this->generateUrl('CoreCoreBundle_index'));
            }
        }

        return $this->render('CoreCoreBundle:Page:index.html.twig', array(
            'form' => $form->createView()
        ));
    }

    public function eventAction()
    {
        return $this->render('CoreCoreBundle:Page:event.html.twig', array());
    }


    public function contactAction()
    {

    }
}