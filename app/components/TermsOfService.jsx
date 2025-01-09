/* 
  File: app/(site)/terms/page.js
  or:   pages/terms.js (for older Next.js versions)
*/

export default function TermsOfService() {
    return (
        <section className="mx-auto max-w-4xl px-4 py-8 text-gray-800">
            {/* Page Heading */}
            <h1 className="text-3xl font-bold mb-6">Terms and Conditions of Use</h1>

            {/* Intro / Acceptance */}
            <section className="mb-6 space-y-4">
                <p>
                    <strong>By accessing and using this website,</strong> web page, client
                    portal, or mobile application (collectively, our “Site”), you are
                    agreeing to be bound by these Terms and Conditions of Use, all
                    applicable laws and regulations, and agree that you are responsible
                    for compliance with any applicable local laws. If you do not agree
                    with any of these terms, you are prohibited from using or accessing
                    this Site.
                </p>
                <p>
                    Our Site and all of the contents, features and functionality
                    (including but not limited to all information, software, text,
                    displays, images, video and audio, and the design, selection and
                    arrangement thereof) are owned by us, our licensors or other providers
                    of such material and are protected by United States and international
                    copyright, trademark, patent, trade secret and other intellectual
                    property or proprietary rights laws, as applicable. We reserve the
                    right to withdraw or amend our Site, and any service or material we
                    provide on our Site, in our sole discretion without notice. We will
                    not be liable if, for any reason, all or any part of our Site is
                    unavailable at any time or for any period.
                </p>
            </section>

            {/* Use License */}
            <section className="mb-6 space-y-4">
                <h2 className="text-2xl font-semibold">Use License</h2>
                <p>
                    Your permission to use and access this Site is the grant of a limited
                    license, not a transfer of title, and your limited license to use or
                    access our Site shall automatically terminate if you violate any of
                    these restrictions and may be terminated by us at any time for any
                    reason or no reason.
                </p>
                <p className="font-semibold">When using or accessing our Site, you may not:</p>
                <ul className="list-disc list-inside space-y-2">
                    <li>modify or copy any material or Services;</li>
                    <li>
                        use the material or Services for any commercial purpose, or for any
                        public display (commercial or non-commercial);
                    </li>
                    <li>
                        attempt to decompile or reverse engineer any software contained on
                        the Site or that supports the Site or any Services;
                    </li>
                    <li>
                        engage in any data mining, data harvesting, data extracting or any
                        other similar activity in relation to this Site;
                    </li>
                    <li>remove any copyright or other proprietary notations from the material; or</li>
                    <li>
                        transfer the materials to another person or entity or “mirror” the
                        material on any other server.
                    </li>
                </ul>
            </section>

            {/* Posting Content */}
            <section className="mb-6 space-y-4">
                <h2 className="text-2xl font-semibold">Posting Content</h2>
                <p>
                    In these Terms and Conditions of Use, your “Content” shall mean any
                    audio, video, text, images or other material, including comments or
                    feedback, you choose to post on or submit to us via this Website. With
                    respect to your Content, by posting it in a way that is visible to the
                    public, you grant us a non-exclusive, worldwide, irrevocable,
                    royalty-free, sublicensable license to use, reproduce, adapt, publish,
                    translate and distribute it on our Site and in any and all media. Your
                    Content must be your own and must not be infringing on any third
                    party’s rights or violate any of the restrictions below. We reserve
                    the right to remove any of your Content from our Site at any time, and
                    for any reason, without notice.
                </p>
                <p className="font-semibold">
                    Without limiting the foregoing, you agree not to use, or permit to be
                    used, any messaging capabilities or any Services on our Site to:
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        post, transmit or disseminate unsolicited material to persons or
                        entities that have not agreed to receive such material or to whom
                        you do not otherwise have a legal right to send such material;
                    </li>
                    <li>
                        upload or post material that infringes or violates any third party’s
                        intellectual property rights, rights of publicity, privacy, or
                        confidentiality;
                    </li>
                    <li>
                        upload or post material or data that is illegal, or harassing,
                        coercive, libelous, defamatory, abusive, threatening, obscene, or
                        otherwise objectionable, or material or data that is harmful to
                        minors;
                    </li>
                    <li>
                        transmit any material containing viruses, Trojan horses, worms, time
                        bombs, cancelbots, or other malicious code intended to damage or
                        interfere with any system; or
                    </li>
                    <li>
                        post material or information that is false, misleading, or likely to
                        deceive.
                    </li>
                </ul>
            </section>

            {/* Disclaimer */}
            <section className="mb-6 space-y-4">
                <h2 className="text-2xl font-semibold">Disclaimer</h2>
                <p>
                    You understand that we cannot and do not guarantee or warrant that
                    files available for downloading from the internet or our Site will be
                    free of viruses or other destructive code. You are responsible for
                    implementing sufficient procedures and checkpoints to satisfy your
                    particular requirements for anti-virus protection and accuracy of data
                    input and output, and for maintaining a means external to our site for
                    any reconstruction of any lost data. <strong>WE WILL NOT BE LIABLE</strong> for
                    any loss or damage caused by a distributed denial-of-service attack,
                    viruses or other technologically harmful material that may infect your
                    computer equipment, data or other proprietary material due to your use
                    of our Site or any services obtained through our Site.
                </p>
                <p>
                    THE MATERIALS ON THE SITE ARE PROVIDED ON AN “AS IS” AND “AS
                    AVAILABLE” BASIS. WE MAKE NO WARRANTIES, EXPRESSED OR IMPLIED, AND
                    HEREBY DISCLAIM AND NEGATE ALL OTHER WARRANTIES, INCLUDING WITHOUT
                    LIMITATION, IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY,
                    FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT OF INTELLECTUAL
                    PROPERTY OR OTHER VIOLATION OF RIGHTS.
                </p>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-6 space-y-4">
                <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
                <p>
                    IN NO EVENT WILL WE, OUR AFFILIATES OR OUR OR THEIR LICENSORS, SERVICE
                    PROVIDERS, AGENTS, EMPLOYEES, OFFICERS OR DIRECTORS BE LIABLE FOR
                    DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN
                    CONNECTION WITH YOUR USE, OR INABILITY TO USE, OUR SITE OR ANY WEBSITES
                    LINKED TO OR FROM IT, INCLUDING ANY DIRECT, INDIRECT, SPECIAL,
                    INCIDENTAL, CONSEQUENTIAL OR PUNITIVE DAMAGES. THE FOREGOING DOES NOT
                    AFFECT ANY LIABILITY WHICH CANNOT BE EXCLUDED OR LIMITED UNDER
                    APPLICABLE LAW.
                </p>
            </section>

            {/* Indemnification */}
            <section className="mb-6 space-y-4">
                <h2 className="text-2xl font-semibold">Indemnification</h2>
                <p>
                    You agree to defend, indemnify and hold harmless us, our affiliates,
                    licensors and service providers, and our and their respective
                    officers, directors, employees, contractors, agents, licensors,
                    suppliers, successors and assigns from and against any claims,
                    liabilities, damages, judgments, awards, losses, costs, expenses or
                    fees (including reasonable attorneys’ fees) arising out of or relating
                    to your violation of these Terms and Conditions of Use and your use of
                    our Site.
                </p>
            </section>

            {/* Revisions and Errata */}
            <section className="mb-6 space-y-4">
                <h2 className="text-2xl font-semibold">Revisions and Errata</h2>
                <p>
                    The materials appearing on our Site could include technical,
                    typographical, or photographic errors. We do not warrant that any of
                    the materials on the Site are accurate, complete, or current. We may
                    make changes to the materials contained on the Site at any time
                    without notice.
                </p>
            </section>

            {/* Links */}
            <section className="mb-6 space-y-4">
                <h2 className="text-2xl font-semibold">Links</h2>
                <p>
                    We have not reviewed all of the third-party websites linked to by the
                    Site and are not responsible for the contents of any such linked site.
                    The inclusion of any link does not imply endorsement by us of the
                    third-party website. Navigation to and use of any such linked website
                    is at the user’s own risk.
                </p>
            </section>

            {/* Site Terms of Use Modifications */}
            <section className="mb-6 space-y-4">
                <h2 className="text-2xl font-semibold">Site Terms of Use Modifications</h2>
                <p>
                    We may revise these Terms and Conditions of Use for the Site at any
                    time without notice. By accessing or using the Site, you are agreeing
                    to be bound by the then-current version of these Terms and Conditions
                    of Use.
                </p>
            </section>

            {/* Governing Law */}
            <section className="mb-6 space-y-4">
                <h2 className="text-2xl font-semibold">Governing Law</h2>
                <p>
                    Any claim relating to the Site shall be governed by the laws of the
                    State in which we are headquartered without regard to its conflict of
                    law provisions.
                </p>
            </section>

            {/* Entire Agreement */}
            <section className="mb-6 space-y-4">
                <h2 className="text-2xl font-semibold">Entire Agreement</h2>
                <p>
                    These Terms and Conditions of Use, our Privacy Policy, and any other
                    document we deem relevant constitute the sole and entire agreement
                    between you and us with respect to our Site and supersede all prior
                    and contemporaneous understandings, agreements, representations and
                    warranties, both written and oral, with respect to our Site.
                </p>
            </section>

            {/* Mobile Messaging Terms & Conditions */}
            <section className="mb-6 space-y-4">
                <h2 className="text-2xl font-semibold">Mobile Messaging Terms &amp; Conditions</h2>
                <p>
                    Thryv, Inc. (“We,” “Us,” “Our”) is offering a mobile messaging program
                    (the “Program”), subject to these Mobile Messaging Terms and
                    Conditions (the “Terms”). If you do not wish to continue participating
                    in the program or no longer agree to these Terms, you can reply “STOP”
                    to any mobile message from Us in order to opt out of the Program.
                </p>
                <p>
                    <strong>User Opt In:</strong> The Program allows users to receive
                    SMS/MMS mobile messages by affirmatively opting into the Program.
                    Regardless of the opt-in method you utilized to join the Program, you
                    agree that these Terms apply to your participation in the Program.
                </p>
                <p>
                    <strong>Program Description:</strong> Without limiting the scope of
                    the Program, users that opt into the Program can expect to receive
                    messages from Our customers, for alerts, coupons, specials, and
                    promotions.
                </p>
                <p>
                    <strong>Cost and Frequency:</strong> Message and data rates may apply.
                    The Program involves recurring mobile messages, and additional mobile
                    messages may be sent based on your interaction with Us.
                </p>
                <p>
                    <strong>Contact Information:</strong> For support, text “HELP” to
                    85100, or email <a href="mailto:smsinfo@thryv.com">smsinfo@thryv.com</a>.
                </p>
                <p>
                    <strong>User Opt Out and Additional Commands:</strong> To opt out,
                    reply “STOP” to 85100. You may also opt out by texting “QUIT”, “END”,
                    “CANCEL”, “UNSUBSCRIBE”, or “STOP ALL” to 85100, or by contacting Us
                    via other means and clearly communicating your intent to unsubscribe.
                    After opting out, you may receive a confirmation message.
                </p>
                <p>
                    <strong>MMS Disclosure:</strong> The Program will send SMS if your
                    mobile device does not support MMS messaging.
                </p>
                <p>
                    <strong>Disclaimer:</strong> The Program is offered on an “as is”
                    basis. We will not be liable for any delays or failures in the receipt
                    of any mobile messages connected with this Program.
                </p>
                <p>
                    <strong>Privacy Policy:</strong> We respect your privacy. We will only
                    use information you provide to transmit your mobile messages and
                    respond to you, if necessary. WE DO NOT SELL, RENT, LOAN, TRADE, LEASE
                    OR OTHERWISE TRANSFER FOR PROFIT ANY PHONE NUMBERS OR CUSTOMER
                    INFORMATION COLLECTED THROUGH THE PROGRAM TO ANY THIRD PARTY.
                </p>
                <p>
                    <strong>Dispute Resolution:</strong> Any dispute, claim or controversy
                    arising out of or relating to the Program will be determined by
                    arbitration in Dallas, Texas, under JAMS rules, and each party waives
                    the right to trial by jury or to participate in a class action.
                </p>
                <p>
                    <strong>Miscellaneous:</strong> You warrant and represent that you
                    have all necessary rights, power, and authority to agree to these
                    Terms and perform your obligations hereunder. The failure of either
                    party to exercise any right shall not be deemed a waiver. Any new
                    features, changes, updates or improvements of the Program shall be
                    subject to these Terms unless stated otherwise.
                </p>
            </section>

            {/* End of Terms */}
            <p className="mt-8 text-sm text-gray-500">
                Updated on 1/9/2025. © Reitano Sports Company. All rights reserved.
            </p>
        </section>
    );
}
